import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { BackgroundMode } from '../types/theme'
import type {
  BingBackground,
  LogData,
  YiYanData,
  HeatmapData
} from '../types/home'

export const useHomeStore = defineStore(
  'home',
  () => {
    // 壁纸
    const backgroundMode = ref<BackgroundMode>('bing')
    const backgroundSrc = ref('')
    const bingBackground = ref<BingBackground>({
      src: '',
      title: '',
      copyright: ''
    })
    const backgroundMessage = ref('')
    const needGetBackground = ref(true)

    // 头像
    const avatarSrc = ref('')
    const avatarRotateStatus = ref(false)
    const avatarClickCount = ref(0)
    const avatarBackText = ref('你好')
    const avatarBackColor = ref('135deg, #FDEB71 10%, #F8D800 100%')

    // 日志
    const logDatas = ref<LogData[]>([])
    const needGetLogDatas = ref(true)

    // 日期时间
    const datetime = ref(new Date())

    // 一言
    const hitokoto = ref('')
    const from = ref('')
    const needGetHitokoto = ref(true)

    // 热力图
    const heatmapDatas = ref<HeatmapData[]>([])
    const heatmapDatasSum = ref(0)
    const needGetHeatmapDatas = ref(true)

    // --- setters（壁纸）---
    function setBackgroundMode(v: BackgroundMode) {
      backgroundMode.value = v
    }
    function setBackgroundSrc(v: string) {
      backgroundSrc.value = v
    }
    function setBingBackground(v: BingBackground) {
      bingBackground.value = v
    }
    function setBackgroundMessage(v: string) {
      backgroundMessage.value = v
    }
    function setNeedGetBackground(v: boolean) {
      needGetBackground.value = v
    }

    // --- setters（头像）---
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

    // --- setters（日志）---
    function setLogDatas(v: LogData[]) {
      logDatas.value = v
    }
    function setNeedGetLogDatas(v: boolean) {
      needGetLogDatas.value = v
    }

    // --- setters（时间）---
    function setDatetime(v: Date) {
      datetime.value = v
    }

    // --- setters（一言）---
    function setHitokoto(v: string) {
      hitokoto.value = v
    }
    function setFrom(v: string) {
      from.value = v
    }
    function setNeedGetHitokoto(v: boolean) {
      needGetHitokoto.value = v
    }

    // --- setters（热力图）---
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
      bingBackground,
      backgroundMessage,
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
      setBingBackground,
      setBackgroundMessage,
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
