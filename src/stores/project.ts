import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../types/project'
import { getProjectDatas } from '../api'
import { withLoading, preloadImages } from '../utils'

/**
 * 项目页 store
 *
 * 职责：持有项目列表；提供 fetchProjects 从 api 拉取数据。
 */
export const useProjectStore = defineStore('project', () => {
  // --- state ---

  // 项目列表
  const projects = ref<Project[]>([])

  // --- setters ---

  function setProjects(v: Project[]) {
    projects.value = v
  }

  // --- fetch actions ---

  // 拉取项目数据（已有数据则跳过）
  async function fetchProjects() {
    if (projects.value.length > 0) return
    await withLoading(async () => {
      const list = await getProjectDatas()
      setProjects(list)
      // 预加载所有项目图片，确保 loading 退出时图片已就绪
      const imageUrls = list.map((p) => p.image).filter(Boolean)
      if (imageUrls.length > 0) await preloadImages(imageUrls)
    })
  }

  return {
    projects,
    setProjects,
    fetchProjects
  }
})
