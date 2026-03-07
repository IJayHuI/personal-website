import { supabase } from './supabase'

import type { HeatmapData } from '../stores'

export const getHeatmapDatas = async () => {
  const { data, error } = await supabase.functions.invoke('heatmap')
  if (error) throw error
  return {
    totalContributions: data.totalContributions,
    heatmapData: data.heatmapData as HeatmapData[]
  }
}
