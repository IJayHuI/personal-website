import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import type { NavigateItem, NavigateGroup } from '../types/navigate'
import { getNavigateDatas } from '../api'
import { withLoading } from '../utils'

/**
 * 导航页 store
 *
 * 职责：持有搜索关键词、菜单、分组内容、高亮项、抽屉状态；
 * 提供 fetchNavigateDatas 从 api 拉取导航数据。
 *
 * 注意：defaultMenuOptions（关闭所有/展开所有）由 JayMenu 组件层拼接，不进 store。
 */
export const useNavigateStore = defineStore('navigate', () => {
  // --- state ---

  // 搜索框关键词
  const searchKeyword = ref('')
  // 菜单选项（仅 API 返回的分组部分）
  const menuOptions = ref<MenuOption[]>([])
  // 当前展开的分组 id 集合
  const expandedGroupIds = ref(new Set<number>())
  // 导航分组内容（分组 + 分组下的站点）
  const groups = ref<NavigateGroup[]>([])
  // 搜索高亮的站点 id 集合
  const highlightedItemIds = ref(new Set<number>())

  // 站点详情抽屉
  const activeDrawerGroup = ref<NavigateGroup>()
  const activeDrawerItem = ref<NavigateItem>()
  // 内容抽屉（站点详情）是否打开
  const isContentDrawerOpen = ref(false)
  // 菜单抽屉（移动端）是否打开
  const isMenuDrawerOpen = ref(false)

  // --- setters ---

  function setSearchKeyword(v: string) {
    searchKeyword.value = v
  }
  function setMenuOptions(options: MenuOption[]) {
    menuOptions.value = options
  }
  function setExpandedGroupIds(v: number[]) {
    expandedGroupIds.value = new Set(v)
  }
  function expandGroup(v: number) {
    expandedGroupIds.value.add(v)
  }
  function collapseGroup(v: number) {
    expandedGroupIds.value.delete(v)
  }
  function setGroups(v: NavigateGroup[]) {
    groups.value = v
  }
  function setHighlightedItemIds(v: number[]) {
    highlightedItemIds.value = new Set(v)
  }
  function setActiveDrawerGroup(v: NavigateGroup) {
    activeDrawerGroup.value = v
  }
  function setActiveDrawerItem(v: NavigateItem) {
    activeDrawerItem.value = v
  }
  function setContentDrawerOpen(v: boolean) {
    isContentDrawerOpen.value = v
  }
  function setMenuDrawerOpen(v: boolean) {
    isMenuDrawerOpen.value = v
  }

  // --- fetch actions ---

  // 拉取导航数据（已有数据则跳过）
  async function fetchNavigateDatas() {
    if (groups.value.length > 0) return
    await withLoading(async () => {
      const response = await getNavigateDatas()
      setMenuOptions(response.menuOptions)
      // 默认展开所有分组（取菜单里的数字 key 作为分组 id）
      setExpandedGroupIds(
        response.menuOptions
          .map((item) => item.key)
          .filter((key): key is number => typeof key === 'number')
      )
      setGroups(response.navigateContent)
      // 默认高亮所有站点
      setHighlightedItemIds(
        response.navigateContent.flatMap((group) =>
          group.groupItems.map((item) => item.id)
        )
      )
    })
  }

  return {
    // state
    searchKeyword,
    menuOptions,
    expandedGroupIds,
    groups,
    highlightedItemIds,
    activeDrawerGroup,
    activeDrawerItem,
    isContentDrawerOpen,
    isMenuDrawerOpen,

    // setters
    setSearchKeyword,
    setMenuOptions,
    setExpandedGroupIds,
    expandGroup,
    collapseGroup,
    setGroups,
    setHighlightedItemIds,
    setActiveDrawerGroup,
    setActiveDrawerItem,
    setContentDrawerOpen,
    setMenuDrawerOpen,

    // fetch
    fetchNavigateDatas
  }
})
