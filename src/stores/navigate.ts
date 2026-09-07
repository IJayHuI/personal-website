import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import type { NavigateItem, NavigateGroup } from '../types/navigate'

export const useNavigateStore = defineStore('navigate', () => {
  const needGetDatas = ref(true)

  // 搜索框
  const inputBox = ref('')

  // 菜单
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
  function setNeedGetDatas(v: boolean) {
    needGetDatas.value = v
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

  return {
    needGetDatas,
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
    setNeedGetDatas,
    setMenuOptions,
    setExpandedCategory,
    addExpandedCategory,
    subtractExpandedCategory,
    setNavigateContent,
    setHighlightItems,
    setDrawerGroup,
    setDrawerItem,
    setContentDrawerStatus,
    setMenuDrawerStatus
  }
})
