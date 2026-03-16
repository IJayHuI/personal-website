import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  function setNeedGetDatas(v: boolean) {
    needGetDatas.value = v
  }
  function setProjectDatas(v: Project[]) {
    projectDatas.value = v
  }

  return {
    needGetDatas,
    projectDatas,

    setNeedGetDatas,
    setProjectDatas
  }
})
