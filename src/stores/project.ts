import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../types/project'
import { getProjectDatas } from '../api'
import { withLoading } from '../utils'

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
      setProjects(await getProjectDatas())
    })
  }

  return {
    projects,
    setProjects,
    fetchProjects
  }
})
