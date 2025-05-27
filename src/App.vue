<script setup>
  import { NConfigProvider, darkTheme, useOsTheme } from 'naive-ui'
  import { computed } from 'vue'
  import { isMobile } from './main'
  import Background from './components/Background.vue'

  const osTheme = useOsTheme()
  const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))

  const lightThemeOverrides = {
    Layout: {
      color: 'rgba(0, 0, 0, 0)',
      footerColor: 'rgba(255, 255, 255, 0.4)',
      textColor: '#000'
    }
  }

  const darkThemeOverrides = {
    Layout: {
      color: 'rgba(16, 16, 20, 0.4)',
      footerColor: 'rgba(24, 24, 28, 0.4)'
    }
  }
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <Background />
    <router-view name="mobile" v-if="isMobile" />
    <router-view name="desktop" v-else />
  </n-config-provider>
</template>
