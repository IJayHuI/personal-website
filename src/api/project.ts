import { supabase } from './supabase'
import type { Project } from '../types/project'

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
