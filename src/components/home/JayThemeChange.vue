<script setup lang="ts">
/**
 * 主题切换卡片
 * 提供 暗色 / 跟随系统 / 浅色 三个按钮，点击切换 general.themeMode
 */
import { ContrastRound } from '@vicons/material'
import type { ThemeMode } from '../../types/theme'
import { useGeneralStore } from '../../stores'

const general = useGeneralStore()

// 切换主题模式
const setThemeMode = (mode: ThemeMode) => {
  general.setThemeMode(mode)
}
</script>
<template>
  <n-card size="medium" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><contrast-round /></n-icon>
    <div class="flex gap-2">
      <n-button v-interaction v-magnetic :class="general.themeMode === 'dark' ? '!outline' : ''" @click="setThemeMode('dark')" secondary round>暗色</n-button>
      <n-button v-interaction v-magnetic :class="general.themeMode === 'system' ? '!outline' : ''" @click="setThemeMode('system')" secondary round>跟随系统</n-button>
      <n-button v-interaction v-magnetic :class="general.themeMode === 'light' ? '!outline' : ''" @click="setThemeMode('light')" secondary round>浅色</n-button>
    </div>
  </n-card>
</template>
