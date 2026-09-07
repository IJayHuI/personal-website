import { supabase } from './supabase'
import type { YiYanData } from '../types/home'

export async function getYiYan(): Promise<YiYanData> {
  const { data, error } = await supabase.functions.invoke('hitokoto')
  if (error) throw error
  return {
    hitokoto: data.hitokoto,
    from: data.from
  }
}
