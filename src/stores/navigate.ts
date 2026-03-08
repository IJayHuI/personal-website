import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'

export type NavigateItem = {
  createdAt: Date
  groupId: number
  id: number
  introduction: string
  link: string
  name: string
  needProxy: boolean
  visible: boolean
}

export type NavigateGroup = {
  createdAt: Date
  icon: string
  id: number
  name: string
  groupItems: NavigateItem[]
}

export const useNavigateStore = defineStore('navigate', () => {
  const needGetDatas = ref<boolean>(true)

  // 菜单
  const menuOptions = ref<MenuOption[]>([])

  // 内容
  const expandedCategory = ref(new Set<number>())
  const navigateContent = ref<NavigateGroup[]>([])

  // 抽屉
  const drawerGroup = ref<NavigateGroup>()
  const drawerItem = ref<NavigateItem>()
  const contentDrawerStatus = ref<boolean>(false)
  const menuDrawerStatus = ref<boolean>(false)

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
    menuOptions,
    needGetDatas,

    expandedCategory,
    navigateContent,

    drawerGroup,
    drawerItem,
    contentDrawerStatus,
    menuDrawerStatus,

    setMenuOptions,
    setNeedGetDatas,

    setExpandedCategory,
    addExpandedCategory,
    subtractExpandedCategory,
    setNavigateContent,

    setDrawerGroup,
    setDrawerItem,
    setContentDrawerStatus,
    setMenuDrawerStatus
  }
})
