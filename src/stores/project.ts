import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'

export type Project = {
  compatibility: string
  createdAt: Date
  githubLink: string
  id: number
  image: string
  introduction: string
  name: string
  webLink?: string
}

export const useProjectStore = defineStore('project', () => {
  const needGetDatas = ref<boolean>(true)
  const projectDatas = ref<Project[]>([])

  const menuOptions = ref<MenuOption[]>([])

  function setNeedGetDatas(v: boolean) {
    needGetDatas.value = v
  }
  function setProjectDatas(v: Project[]) {
    projectDatas.value = v
  }
  function setMenuOptions(v: MenuOption[]) {
    menuOptions.value = v
  }

  return {
    needGetDatas,
    projectDatas,

    menuOptions,

    setNeedGetDatas,
    setProjectDatas,

    setMenuOptions
  }
})
