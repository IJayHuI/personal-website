import { supabase } from './supabase'
import type { LogData } from '../types/home'

export async function getLogs(): Promise<LogData[]> {
  const { data, error } = await supabase.functions.invoke('releases')
  if (error) throw error
  return data.map(
    (item: any) =>
      ({
        id: item.id,
        tagName: item.tag_name,
        name: item.name,
        draft: item.draft,
        prerelease: item.prerelease,
        publishedAt: item.published_at
      }) as LogData
  )
}
