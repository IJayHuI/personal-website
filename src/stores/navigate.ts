import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import type { NavigateItem, NavigateGroup } from '../types/navigate'
import { useGeneralStore } from './general'
import { getNavigateDatas } from '../api'

export const useNavigateStore = defineStore('navigate', () => {
  // 搜索框
  const inputBox = ref('')

  // 菜单（仅 API 返回的部分，defaultMenuOptions 由组件层拼接）
  const menuOptions = ref<MenuOption[]>([])

  // 内容
  const expandedCategory = ref(new Set<number>())
  const navigateContent = ref<NavigateGroup[]>([])
  const highlightItems = ref(new Set<number>())

  // 抽屉
  const drawerGroup = ref<NavigateGroup>()
  const drawerItem = ref<NavigateItem>()
  const contentDrawerStatus = ref(false)
  const menuDrawerStatus = ref(false)

  function setInputBox(v: string) {
    inputBox.value = v
  }
  function setMenuOptions(options: MenuOption[]) {
    menuOptions.value = options
  }
  function setExpandedCategory(v: number[]) {
    expandedCategory.value = new Set(v)
  }
  function addExpandedCategory(v: number) {
    expandedCategory.value.add(v)
  }
  function subtractExpandedCategory(v: number) {
    expandedCategory.value.delete(v)
  }
  function setNavigateContent(v: NavigateGroup[]) {
    navigateContent.value = v
  }
  function setHighlightItems(v: number[]) {
    highlightItems.value = new Set(v)
  }
  function setDrawerGroup(v: NavigateGroup) {
    drawerGroup.value = v
  }
  function setDrawerItem(v: NavigateItem) {
    drawerItem.value = v
  }
  function setContentDrawerStatus(v: boolean) {
    contentDrawerStatus.value = v
  }
  function setMenuDrawerStatus(v: boolean) {
    menuDrawerStatus.value = v
  }

  // 拉取导航数据（已有数据则跳过）
  async function fetchNavigateDatas() {
    if (navigateContent.value.length > 0) return
    const general = useGeneralStore()
    general.loadingEventAdd()
    try {
      const response = await getNavigateDatas()
      setMenuOptions(response.menuOptions)
      setExpandedCategory(
        response.menuOptions
          .map((item) => item.key)
          .filter((key): key is number => typeof key === 'number')
      )
      setNavigateContent(response.navigateContent)
      setHighlightItems(
        response.navigateContent.flatMap((group) =>
          group.groupItems.map((item) => item.id)
        )
      )
    } catch (e) {
      console.error(e)
    } finally {
      general.loadingEventSubtract()
    }
  }

  return {
    inputBox,
    menuOptions,
    expandedCategory,
    navigateContent,
    highlightItems,

    drawerGroup,
    drawerItem,
    contentDrawerStatus,
    menuDrawerStatus,

    setInputBox,
    setMenuOptions,
    setExpandedCategory,
    addExpandedCategory,
    subtractExpandedCategory,
    setNavigateContent,
    setHighlightItems,
    setDrawerGroup,
    setDrawerItem,
    setContentDrawerStatus,
    setMenuDrawerStatus,

    fetchNavigateDatas
  }
})
