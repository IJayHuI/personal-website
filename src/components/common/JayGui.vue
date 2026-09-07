<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { onBeforeUnmount, watch } from 'vue'
import type { ThemeMode } from '../../types'
import { isMobile, getIsDark } from '../../utils'
import { useGeneralStore } from '../../stores'
import JayLoading from './JayLoading.vue'

const general = useGeneralStore()
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
  general.setSystemPrefersDark(mediaQuery.matches)
  setBodyBackground(general.themeMode)
}

// 监听主题模式变化，更新页面背景颜色，并根据系统主题变化添加或移除事件监听器
watch(
  () => general.themeMode,
  (mode: ThemeMode) => {
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
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.fullPath" class="!absolute inset-0" />
  </router-view>
  <n-spin
    v-if="general.loading.status"
    :size="200"
    :rotate="false"
    :class="['fixed inset-0 z-50', general.isDark ? 'bg-black' : 'bg-white']"
  >
    <template #icon><jay-loading :is-dark="general.isDark" /></template>
    <template #description>{{ general.loading.text }}</template>
  </n-spin>
</template>
