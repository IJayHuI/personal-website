import { supabase } from './supabase'

import type { BackgroundMode } from '../stores'

export type GetBackgroundResult = {
  img: string
  message: string
  mode: BackgroundMode
}

const getLocalBackgroundImage = () => {
  const index = Math.floor(Math.random() * 10) + 1
  return `/local-background/background${index}.jpg`
}

const buildLocalBackgroundResult = async (message: string = '现在使用站内壁纸作为背景'): Promise<GetBackgroundResult> => {
  const img = getLocalBackgroundImage()
  return {
    img,
    message,
    mode: 'local'
  }
}

export const getBackground = async (mode: BackgroundMode): Promise<GetBackgroundResult> => {
  if (mode === 'local') {
    return buildLocalBackgroundResult()
  }

  const { data, error } = await supabase.functions.invoke('bing-background')
  if (error || !data?.url) {
    return buildLocalBackgroundResult('获取 Bing 图片失败，已切换为站内壁纸')
  }

  const img = `https://cn.bing.com${data.url}`
  return {
    img,
    message: '现在使用 Bing 作为背景',
    mode: 'bing'
  }
}
