import { supabase } from './supabase'

import type { YiYanData } from '../stores/home'

export const getYiYan = async () => {
  const { data, error } = await supabase.functions.invoke('hitokoto')
  if (error) throw error
  console.log(data)
  return {
    hitokoto: data.hitokoto,
    from: data.from
  } as YiYanData
}
