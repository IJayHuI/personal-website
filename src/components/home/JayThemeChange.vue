<script setup lang="ts">
import { ContrastRound } from '@vicons/material'
import type { ThemeMode } from '../../types/theme'
import { useGeneralStore } from '../../stores'

const general = useGeneralStore()

const setThemeMode = (mode: ThemeMode) => {
  general.setThemeMode(mode)
}
</script>
<template>
  <n-card v-interaction size="medium" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><contrast-round /></n-icon>
    <div class="flex gap-2">
      <n-button :class="general.themeMode === 'dark' ? '!outline' : ''" @click="setThemeMode('dark')" secondary round>暗色</n-button>
      <n-button :class="general.themeMode === 'system' ? '!outline' : ''" @click="setThemeMode('system')" secondary round>跟随系统</n-button>
      <n-button :class="general.themeMode === 'light' ? '!outline' : ''" @click="setThemeMode('light')" secondary round>浅色</n-button>
    </div>
  </n-card>
</template>
