import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../types/project'
import { useGeneralStore } from './general'
import { getProjectDatas } from '../api'

export const useProjectStore = defineStore('project', () => {
  const projectDatas = ref<Project[]>([])

  function setProjectDatas(v: Project[]) {
    projectDatas.value = v
  }

  // 拉取项目数据（已有数据则跳过）
  async function fetchProjectDatas() {
    if (projectDatas.value.length > 0) return
    const general = useGeneralStore()
    general.loadingEventAdd()
    try {
      setProjectDatas(await getProjectDatas())
    } catch (e) {
      console.error(e)
    } finally {
      general.loadingEventSubtract()
    }
  }

  return {
    projectDatas,

    setProjectDatas,

    fetchProjectDatas
  }
})
