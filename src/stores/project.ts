import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../types/project'

export const useProjectStore = defineStore('project', () => {
  const needGetDatas = ref(true)
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
