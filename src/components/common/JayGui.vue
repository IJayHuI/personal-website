<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { ThemeMode } from '../../types'
import { isMobile, getIsDark } from '../../utils'
import { useGeneralStore } from '../../stores'
import { activateCursor, deactivateCursor } from '../../directives/magnetic'
import JayLoading from './JayLoading.vue'

const general = useGeneralStore()
const route = useRoute()
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

// 加载所有页面配置（用于检测是否启用自定义光标）
const pageConfigs = import.meta.glob('../../configs/*.json', { eager: true, import: 'default' }) as Record<string, { customCursor?: boolean }>

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

// 监听路由变化，根据页面配置决定是否启用自定义光标
watch(
  () => route.name,
  (name) => {
    if (!name) return
    // 路由名转小写匹配配置文件名（如 Home → home.json）
    const configPath = `../../configs/${String(name).toLowerCase()}.json`
    const config = pageConfigs[configPath]
    if (config?.customCursor && !isMobile()) {
      activateCursor()
    } else {
      deactivateCursor()
    }
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
  deactivateCursor()
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
