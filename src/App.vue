<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import themeOverrides from './theme/general.json'

// 临时占位：阶段 3 填充 general store 后改为响应式 isDark
// import { useGeneralStore } from './stores'
// const general = useGeneralStore()
// const theme = computed(() => general.isDark ? darkTheme : null)
const theme = null  // 亮色
</script>

<template>
  <NConfigProvider
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>
