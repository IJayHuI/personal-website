<script setup lang="ts">
  import { darkTheme } from 'naive-ui'
  import { onBeforeUnmount, watch } from 'vue'

  import { useStores, type ThemeMode } from '../stores'

  import { isMobile } from '../lib/is-mobile'
  import { getIsDark } from '../lib/theme-mode'
  import { calculateShowBackgroundProgress } from '../lib/background'

  import JayGui from '../components/JayGui.vue'

  const { general, home } = useStores()
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  // 同步移动设备状态
  const syncMobileState = () => {
    general.setIsMobile(isMobile())
  }
  // 根据当前主题模式设置页面背景颜色
  const setBodyBackground = (mode: ThemeMode) => {
    document.body.style.backgroundColor = getIsDark(mode) ? darkTheme.common.bodyColor : '#fff'
  }
  // 处理系统主题变化事件
  const handleSystemThemeChange = () => {
    // 更新暗色模式状态和页面背景颜色
    general.setIsDark(getIsDark('system'))
    setBodyBackground('system')

    // 更新背景显示元素的起始和结束样式，并根据当前元素位置调整背景模糊度、亮度和缩放
    home.setBackgroundStartStyle({ blur: 20, brightness: getIsDark('system') ? 50 : 70, scale: 130 })
    home.setBackgroundEndStyle({ blur: 0, brightness: 100, scale: general.isMobile ? 100 : 115 })
    const showBackgroundElement = document.getElementById('show-background')
    const windowHeight = window.innerHeight
    let elementPlace = showBackgroundElement ? Math.round(showBackgroundElement.getBoundingClientRect().top) : window.innerHeight
    const { blur, brightness, scale } = calculateShowBackgroundProgress(windowHeight, elementPlace, home.backgroundStartStyle, home.backgroundEndStyle)
    home.setBackgroundBlur(blur)
    home.setBackgroundBrightness(brightness)
    home.setBackgroundScale(scale)
  }

  // 监听主题模式变化，更新暗色模式状态和页面背景颜色，并根据系统主题变化添加或移除事件监听器
  watch(
    () => general.themeMode,
    (mode: ThemeMode) => {
      general.setIsDark(getIsDark(mode))
      setBodyBackground(mode)
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
      if (mode === 'system') mediaQuery.addEventListener('change', handleSystemThemeChange)
    },
    { immediate: true }
  )
  // 初始同步移动设备状态，并监听窗口大小变化以更新状态
  syncMobileState()
  window.addEventListener('resize', syncMobileState)
  // 组件卸载时移除事件监听器，避免内存泄漏
  onBeforeUnmount(() => {
    window.removeEventListener('resize', syncMobileState)
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  })
</script>

<template>
  <jay-gui :loading-status="general.loading.status" :loading-text="general.loading.text" />
</template>
