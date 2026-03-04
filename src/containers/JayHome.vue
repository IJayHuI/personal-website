<script setup lang="ts">
  import { useMessage } from 'naive-ui'

  import JayHome from '../components/home/JayHome.vue'

  import { getBackground, type GetBackgroundResult } from '../lib/background'

  import { useStores, type BackgroundMode, type ThemeMode } from '../stores'

  const { general, home } = useStores()
  const message = useMessage()

  const setThemeMode = (mode: ThemeMode) => {
    general.setThemeMode(mode)
  }
  const setBackgroundMode = (mode: BackgroundMode) => {
    if (home.backgroundMode === mode) return
    home.setBackgroundMode(mode)
    general.loadingEventAdd()
    getBackground(home.backgroundMode)
      .then((response: GetBackgroundResult) => {
        message.info(response.message)
        home.setBackgroundSrc(response.img)
        home.setBackgroundMode(response.mode)
      })
      .finally(() => {
        general.loadingEventSubtract()
        home.setNeedGetBackground(false)
      })
  }
</script>
<template>
  <jay-home :is-mobile="general.isMobile" :set-theme-mode="setThemeMode" :set-background-mode="setBackgroundMode" />
</template>
