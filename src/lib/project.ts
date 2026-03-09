import { supabase } from './supabase'

import type { Project } from '../stores'

export const getDatas = async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) throw error
  return data.map((project: any) => {
    return {
      compatibility: project.compatibility,
      createdAt: project.created_at,
      githubLink: project.github_link,
      id: project.id,
      image: project.image,
      introduction: project.introduction,
      name: project.name,
      webLink: project.web_link
    }
  }) as Project[]
}
