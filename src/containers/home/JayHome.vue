<script setup lang="ts">
  import { useMessage } from 'naive-ui'
  import { onMounted, onBeforeUnmount } from 'vue'

  import JayHome from '../../components/home/JayHome.vue'

  import { getBackground, calculateShowBackgroundProgress, type GetBackgroundResult } from '../../lib/background'
  import { getIsDark } from '../../lib/theme-mode'

  import { useStores, type BackgroundMode, type ThemeMode } from '../../stores'

  const { general, home } = useStores()
  const message = useMessage()
  let showBackgroundElement: HTMLElement | null = null

  // 设置主题模式
  const setThemeMode = (mode: ThemeMode) => {
    general.setThemeMode(mode)
    home.setBackgroundStartStyle({ blur: 20, brightness: getIsDark(mode) ? 30 : 50, scale: 130 })
    home.setBackgroundEndStyle({ blur: 0, brightness: 100, scale: general.isMobile ? 100 : 115 })
    setBackgroundScroll()
  }
  // 设置背景模式并获取背景图片
  const setBackgroundMode = (mode: BackgroundMode) => {
    if (home.backgroundMode === mode) return
    home.setBackgroundMode(mode)
    general.loadingEventAdd()
    getBackground(mode)
      .then((response: GetBackgroundResult) => {
        message.info(response.message)
        home.setBackgroundSrc(response.img)
        home.setBackgroundMode(response.mode)
      })
      .finally(() => {
        general.loadingEventSubtract()
        home.setNeedGetBackground(false)
      })
  }
  const randomBackground = () => {
    general.loadingEventAdd()
    getBackground('local')
      .then((response: GetBackgroundResult) => {
        home.setBackgroundSrc(response.img)
      })
      .finally(() => {
        general.loadingEventSubtract()
      })
  }
  // 根据背景显示元素与视口的位置关系计算背景模糊度、亮度和缩放，并设置到状态中
  const setBackgroundScroll = () => {
    const windowHeight = window.innerHeight
    const elementPlace = getElementY()
    const { blur, brightness, scale } = calculateShowBackgroundProgress(windowHeight, elementPlace, home.backgroundStartStyle, home.backgroundEndStyle)
    home.setBackgroundBlur(blur)
    home.setBackgroundBrightness(brightness)
    home.setBackgroundScale(scale)
  }
  // 获取背景显示元素距离视口的位置
  const getElementY = (): number => {
    showBackgroundElement = document.getElementById('show-background')
    if (!showBackgroundElement) return window.innerHeight
    return Math.round(showBackgroundElement.getBoundingClientRect().top)
  }
  // 监听滚动和窗口大小变化事件以调整背景模糊度和亮度
  const startListen = () => {
    window.addEventListener('scroll', setBackgroundScroll, { passive: true })
    window.addEventListener('resize', setBackgroundScroll)
  }
  // 停止监听滚动和窗口大小变化事件
  const stopListen = () => {
    window.removeEventListener('scroll', setBackgroundScroll)
    window.removeEventListener('resize', setBackgroundScroll)
  }
  // 监听背景显示元素是否进入视口，进入则监听滚动事件以调整背景模糊度和亮度，离开则停止监听
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (!entry) return
    if (entry.isIntersecting) startListen()
    else stopListen()
  })

  // 初始设置背景模糊度、亮度和缩放，并设置背景显示元素的起始和结束样式
  home.setBackgroundBlur(20)
  home.setBackgroundBrightness(general.isDark ? 30 : 50)
  home.setBackgroundScale(130)
  home.setBackgroundStartStyle({ blur: 20, brightness: general.isDark ? 30 : 50, scale: 130 })
  home.setBackgroundEndStyle({ blur: 0, brightness: 100, scale: general.isMobile ? 100 : 115 })

  onMounted(() => {
    getElementY()
    if (!showBackgroundElement) return
    observer.observe(showBackgroundElement)
  })
  onBeforeUnmount(() => {
    observer.disconnect()
    stopListen()
  })
</script>
<template>
  <jay-home
    :is-dark="general.isDark"
    :is-mobile="general.isMobile"
    :is-loading="general.loading.status"
    :theme-mode="general.themeMode"
    :background-mode="home.backgroundMode"
    :background-src="home.backgroundSrc"
    :set-theme-mode="setThemeMode"
    :set-background-mode="setBackgroundMode"
    :random-background="randomBackground" />
</template>
