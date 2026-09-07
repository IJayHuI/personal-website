import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { BackgroundMode } from '../types/theme'
import type {
  BingBackground,
  LogData,
  YiYanData,
  HeatmapData
} from '../types/home'
import { useGeneralStore } from './general'
import { getBingBackground, getLogs, getYiYan, getHeatmapDatas } from '../api'
import { getLocalBackgroundImage } from '../utils'

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

    // 头像
    const avatarSrc = ref('')
    const avatarRotateStatus = ref(false)
    const avatarClickCount = ref(0)
    const avatarBackText = ref('你好')
    const avatarBackColor = ref('135deg, #FDEB71 10%, #F8D800 100%')

    // 日志
    const logDatas = ref<LogData[]>([])

    // 日期时间
    const datetime = ref(new Date())

    // 一言
    const hitokoto = ref('')
    const from = ref('')

    // 热力图
    const heatmapDatas = ref<HeatmapData[]>([])
    const heatmapDatasSum = ref(0)

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

    // --- setters（热力图）---
    function setHeatmapDatas(v: HeatmapData[]) {
      heatmapDatas.value = v
    }
    function setHeatmapDatasSum(v: number) {
      heatmapDatasSum.value = v
    }

    // --- fetch actions ---

    // 壁纸：bing 有缓存则直接用，否则请求；失败降级到 local
    async function fetchBackground(mode: BackgroundMode) {
      const general = useGeneralStore()
      general.loadingEventAdd()
      try {
        if (mode === 'local') {
          setBackgroundSrc(getLocalBackgroundImage())
          setBackgroundMessage('现在使用站内壁纸作为背景')
          return
        }
        if (bingBackground.value.src) {
          setBackgroundSrc(bingBackground.value.src)
          setBackgroundMessage('现在使用 Bing 作为背景')
          return
        }
        try {
          const bing = await getBingBackground()
          setBingBackground(bing)
          setBackgroundSrc(bing.src)
          setBackgroundMessage('现在使用 Bing 作为背景')
        } catch {
          setBackgroundSrc(getLocalBackgroundImage())
          setBackgroundMessage('获取 Bing 图片失败，已切换为站内壁纸')
        }
      } finally {
        general.loadingEventSubtract()
      }
    }

    // 日志
    async function fetchLogs() {
      if (logDatas.value.length > 0) return
      const general = useGeneralStore()
      general.loadingEventAdd()
      try {
        setLogDatas(await getLogs())
      } catch (e) {
        console.error(e)
      } finally {
        general.loadingEventSubtract()
      }
    }

    // 一言
    async function fetchYiYan() {
      if (hitokoto.value) return
      const general = useGeneralStore()
      general.loadingEventAdd()
      try {
        const data = await getYiYan()
        setHitokoto(data.hitokoto)
        setFrom(data.from)
      } catch (e) {
        console.error(e)
      } finally {
        general.loadingEventSubtract()
      }
    }

    // 热力图
    async function fetchHeatmap() {
      if (heatmapDatas.value.length > 0) return
      const general = useGeneralStore()
      general.loadingEventAdd()
      try {
        const data = await getHeatmapDatas()
        setHeatmapDatas(data.heatmapData)
        setHeatmapDatasSum(data.totalContributions)
      } catch (e) {
        console.error(e)
      } finally {
        general.loadingEventSubtract()
      }
    }

    return {
      backgroundMode,
      backgroundSrc,
      bingBackground,
      backgroundMessage,

      avatarSrc,
      avatarRotateStatus,
      avatarClickCount,
      avatarBackText,
      avatarBackColor,

      logDatas,

      datetime,

      hitokoto,
      from,

      heatmapDatas,
      heatmapDatasSum,

      setBackgroundMode,
      setBackgroundSrc,
      setBingBackground,
      setBackgroundMessage,

      setAvatarSrc,
      setAvatarRotateStatus,
      avatarClickCountAdd,
      setAvatarBackText,
      setAvatarBackColor,

      setLogDatas,

      setDatetime,

      setHitokoto,
      setFrom,

      setHeatmapDatas,
      setHeatmapDatasSum,

      fetchBackground,
      fetchLogs,
      fetchYiYan,
      fetchHeatmap
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
