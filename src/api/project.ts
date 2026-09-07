import { supabase } from './supabase'
import type { Project } from '../types/project'

/**
 * 获取项目列表（从 Supabase projects 表查询）
 * - 成功：返回 Project[]
 * - 失败：throw
 */
export async function getProjectDatas(): Promise<Project[]> {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) throw error
  return data.map((project: any) => ({
    compatibility: project.compatibility,
    createdAt: project.created_at,
    githubLink: project.github_link,
    id: project.id,
    image: project.image,
    introduction: project.introduction,
    name: project.name,
    webLink: project.web_link
  })) as Project[]
}
