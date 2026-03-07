<script setup lang="ts">
  import { ContrastRound } from '@vicons/material'

  import type { ThemeMode } from '../../stores'

  const props = withDefaults(
    defineProps<{
      themeMode?: ThemeMode
      setThemeMode?: (mode: ThemeMode) => void
    }>(),
    {
      themeMode: 'system',
      setThemeMode: () => {}
    }
  )
</script>
<template>
  <n-card class="interaction" size="medium" @touchstart="" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><contrast-round /></n-icon>
    <div class="flex gap-2">
      <n-button :class="props.themeMode === 'dark' ? '!outline' : ''" @click="props.setThemeMode('dark')" secondary round>暗色</n-button>
      <n-button :class="props.themeMode === 'system' ? '!outline' : ''" @click="props.setThemeMode('system')" secondary round>跟随系统</n-button>
      <n-button :class="props.themeMode === 'light' ? '!outline' : ''" @click="props.setThemeMode('light')" secondary round>浅色</n-button>
    </div>
  </n-card>
</template>
