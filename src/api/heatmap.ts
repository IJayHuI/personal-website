import { supabase } from './supabase'
import type { HeatmapData } from '../types/home'

/**
 * 获取 Github 贡献热力图（调用 heatmap Edge Function）
 * - 成功：返回 { totalContributions, heatmapData }
 * - 失败：throw
 */
export async function getHeatmapDatas() {
  const { data, error } = await supabase.functions.invoke('heatmap')
  if (error) throw error
  return {
    totalContributions: data.totalContributions,
    heatmapData: data.heatmapData as HeatmapData[]
  }
}
