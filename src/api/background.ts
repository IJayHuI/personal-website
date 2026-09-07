import { supabase } from './supabase'
import type { BingBackground } from '../types/home'

/**
 * 获取 Bing 壁纸
 * - 成功：返回 BingBackground
 * - 失败：throw（降级逻辑由 store 层处理）
 */
export async function getBingBackground(): Promise<BingBackground> {
  const { data, error } = await supabase.functions.invoke('bing-background')
  if (error || !data?.url) {
    throw error ?? new Error('Bing background data missing')
  }
  return {
    src: `https://cn.bing.com${data.url}`,
    copyright: data.copyright,
    title: data.title
  }
}
