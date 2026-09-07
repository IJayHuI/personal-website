import { supabase } from './supabase'
import type { HeatmapData } from '../types/home'

export async function getHeatmapDatas() {
  const { data, error } = await supabase.functions.invoke('heatmap')
  if (error) throw error
  return {
    totalContributions: data.totalContributions,
    heatmapData: data.heatmapData as HeatmapData[]
  }
}
