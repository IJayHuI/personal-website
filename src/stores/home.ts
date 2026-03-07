import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { BackgroundScrollResult } from '../lib/background'

export type BackgroundMode = 'local' | 'bing'

export type LogData = {
  id: number
  tagName: string
  name: string
  draft: boolean
  prerelease: boolean
  publishedAt: string
}

export type YiYanData = {
  hitokoto: string
  from: string
}

export type HeatmapData = {
  timestamp: number
  count: number
}

export const useHomeStore = defineStore(
  'home',
  () => {
    // 壁纸
    const backgroundMode = ref<BackgroundMode>('bing')
    const backgroundSrc = ref<string>('')
    const backgroundBlur = ref<number>(0)
    const backgroundBrightness = ref<number>(0)
    const backgroundScale = ref<number>(0)
    const backgroundStartStyle = ref<BackgroundScrollResult>({ blur: 0, brightness: 0, scale: 0 })
    const backgroundEndStyle = ref<BackgroundScrollResult>({ blur: 0, brightness: 0, scale: 0 })
    const needGetBackground = ref<boolean>(true)

    // 头像
    const avatarSrc = ref<string>('')
    const avatarRotateStatus = ref<boolean>(false)
    const avatarClickCount = ref<number>(0)
    const avatarBackText = ref<string>('你好')
    const avatarBackColor = ref<string>('135deg, #FDEB71 10%, #F8D800 100%')

    // 日志
    const logDatas = ref<LogData[]>([])
    const needGetLogDatas = ref<boolean>(true)

    // 日期时间
    const datetime = ref<Date>(new Date())

    // 一言
    const hitokoto = ref<string>('')
    const from = ref<string>('')
    const needGetHitokoto = ref<boolean>(true)

    // 热力图
    const heatmapDatas = ref<HeatmapData[]>([])
    const heatmapDatasSum = ref<number>(0)
    const needGetHeatmapDatas = ref<boolean>(true)

    function setBackgroundMode(v: BackgroundMode) {
      backgroundMode.value = v
    }
    function setBackgroundSrc(v: string) {
      backgroundSrc.value = v
    }
    function setBackgroundBlur(v: number) {
      backgroundBlur.value = v
    }
    function setBackgroundBrightness(v: number) {
      backgroundBrightness.value = v
    }
    function setBackgroundScale(v: number) {
      backgroundScale.value = v
    }
    function setBackgroundStartStyle(v: BackgroundScrollResult) {
      backgroundStartStyle.value = v
    }
    function setBackgroundEndStyle(v: BackgroundScrollResult) {
      backgroundEndStyle.value = v
    }
    function setNeedGetBackground(v: boolean) {
      needGetBackground.value = v
    }

    function setAvatarSrc(v: string) {
      avatarSrc.value = v
    }
    function setAvatarRotateStatus(v: boolean) {
      avatarRotateStatus.value = v
    }
    function avatarClickCountAdd() {
      avatarClickCount.value++
    }
    function setAvatarBackText(v: string) {
      avatarBackText.value = v
    }
    function setAvatarBackColor(v: string) {
      avatarBackColor.value = v
    }

    function setLogDatas(v: LogData[]) {
      logDatas.value = v
    }
    function setNeedGetLogDatas(v: boolean) {
      needGetLogDatas.value = v
    }

    function setDatetime(v: Date) {
      datetime.value = v
    }

    function setHitokoto(v: string) {
      hitokoto.value = v
    }
    function setFrom(v: string) {
      from.value = v
    }
    function setNeedGetHitokoto(v: boolean) {
      needGetHitokoto.value = v
    }

    function setHeatmapDatas(v: HeatmapData[]) {
      heatmapDatas.value = v
    }
    function setHeatmapDatasSum(v: number) {
      heatmapDatasSum.value = v
    }
    function setNeedGetHeatmapDatas(v: boolean) {
      needGetHeatmapDatas.value = v
    }

    return {
      backgroundMode,
      backgroundSrc,
      backgroundBlur,
      backgroundBrightness,
      backgroundScale,
      backgroundStartStyle,
      backgroundEndStyle,
      needGetBackground,

      avatarSrc,
      avatarRotateStatus,
      avatarClickCount,
      avatarBackText,
      avatarBackColor,

      logDatas,
      needGetLogDatas,

      datetime,

      hitokoto,
      from,
      needGetHitokoto,

      heatmapDatas,
      heatmapDatasSum,
      needGetHeatmapDatas,

      setBackgroundMode,
      setBackgroundSrc,
      setBackgroundBlur,
      setBackgroundBrightness,
      setBackgroundScale,
      setBackgroundStartStyle,
      setBackgroundEndStyle,
      setNeedGetBackground,

      setAvatarSrc,
      setAvatarRotateStatus,
      avatarClickCountAdd,
      setAvatarBackText,
      setAvatarBackColor,

      setLogDatas,
      setNeedGetLogDatas,

      setDatetime,

      setHitokoto,
      setFrom,
      setNeedGetHitokoto,

      setHeatmapDatas,
      setHeatmapDatasSum,
      setNeedGetHeatmapDatas
    }
  },
  {
    persist: {
      key: 'home-store',
      storage: localStorage,
      pick: ['backgroundMode']
    }
  }
)
