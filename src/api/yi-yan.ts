import { supabase } from './supabase'
import type { YiYanData } from '../types/home'

/**
 * 获取一言（调用 hitokoto Edge Function）
 * - 成功：返回 YiYanData（hitokoto + from）
 * - 失败：throw
 */
export async function getYiYan(): Promise<YiYanData> {
  const { data, error } = await supabase.functions.invoke('hitokoto')
  if (error) throw error
  return {
    hitokoto: data.hitokoto,
    from: data.from
  }
}
