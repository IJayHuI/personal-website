<script setup lang="ts">
  import { darkTheme } from 'naive-ui'
  import { onBeforeUnmount, watch } from 'vue'

  import { useStores, type ThemeMode } from '../stores'

  import { isMobile } from '../lib/is-mobile'
  import { getIsDark } from '../lib/theme-mode'

  import JayGui from '../components/JayGui.vue'

  const { general } = useStores()
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  // 同步移动设备状态
  const syncMobileState = () => {
    general.setIsMobile(isMobile())
  }
  // 根据当前主题模式设置页面背景颜色
  const setBodyBackground = (mode: ThemeMode) => {
    document.body.style.backgroundColor = getIsDark(mode) ? darkTheme.common.bodyColor : '#fff'
  }
  // 处理系统主题变化事件，更新暗色模式状态和页面背景颜色
  const handleSystemThemeChange = () => {
    general.setIsDark(getIsDark('system'))
    setBodyBackground('system')
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
