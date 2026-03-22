<script setup lang="ts">
  import JayHome from '../../components/home/JayHome.vue'

  import { getBackground, type GetBackgroundResult } from '../../lib/background'

  import { useStores, type BackgroundMode, type ThemeMode } from '../../stores'

  const { general, home } = useStores()

  // 设置主题模式
  const setThemeMode = (mode: ThemeMode) => {
    general.setThemeMode(mode)
  }
  // 设置背景模式并获取背景图片
  const setBackgroundMode = (mode: BackgroundMode) => {
    if (home.backgroundMode === mode) return
    home.setBackgroundMode(mode)
    general.loadingEventAdd()
    if (home.backgroundMode === 'bing') {
      home.setBackgroundSrc(home.bingBackgroundSrc)
      general.loadingEventSubtract()
    } else {
      getBackground('local')
        .then((response: GetBackgroundResult) => {
          home.setBackgroundSrc(response.img)
        })
        .finally(() => {
          general.loadingEventSubtract()
        })
    }
  }
  const randomBackground = () => {
    general.loadingEventAdd()
    getBackground('local')
      .then((response: GetBackgroundResult) => {
        home.setBackgroundSrc(response.img)
      })
      .finally(() => {
        general.loadingEventSubtract()
      })
  }
</script>
<template>
  <jay-home
    :is-dark="general.isDark"
    :is-mobile="general.isMobile"
    :is-loading="general.loading.status"
    :theme-mode="general.themeMode"
    :background-mode="home.backgroundMode"
    :bing-background-src="home.bingBackgroundSrc"
    :set-theme-mode="setThemeMode"
    :set-background-mode="setBackgroundMode"
    :random-background="randomBackground" />
</template>
