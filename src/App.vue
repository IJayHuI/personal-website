<script setup lang="ts">
import { computed } from 'vue'
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
import themeOverrides from './theme/general.json'
import { useGeneralStore } from './stores'
import JayGui from './components/common/JayGui.vue'

const general = useGeneralStore()
const theme = computed(() => (general.isDark ? darkTheme : null))
</script>

<template>
  <NConfigProvider
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <NMessageProvider>
      <JayGui />
    </NMessageProvider>
  </NConfigProvider>
</template>
