<script setup lang="ts">
  import { onBeforeMount, onMounted, onUnmounted } from 'vue'
  import { useMessage } from 'naive-ui'
  import gsap from 'gsap'

  import JayBackground from '../../components/home/JayBackground.vue'

  import { useStores } from '../../stores'

  import { getBackground, calculateMouseMove, type GetBackgroundResult } from '../../lib/background'

  const { general, home } = useStores()
  const message = useMessage()
  const state = {
    x: 0,
    y: 0
  }
  let targetX = 0
  let targetY = 0

  const handleMouseMove = (e: MouseEvent) => {
    const result = calculateMouseMove(e)
    targetX = result.targetX
    targetY = result.targetY
  }

  onBeforeMount(() => {
    if (!home.needGetBackground) return
    general.loadingEventAdd()
    getBackground(home.backgroundMode)
      .then((response: GetBackgroundResult) => {
        message.success(response.message)
        home.setBackgroundSrc(response.img)
        home.setBackgroundMode(response.mode)
      })
      .finally(() => {
        general.loadingEventSubtract()
        home.setNeedGetBackground(false)
      })
  })
  onMounted(() => {
    if (general.isMobile) return
    window.addEventListener('mousemove', handleMouseMove)
    gsap.ticker.add(() => {
      state.x += (targetX - state.x) * 0.08
      state.y += (targetY - state.y) * 0.08

      document.documentElement.style.setProperty('--move-x', `${state.x}px`)
      document.documentElement.style.setProperty('--move-y', `${state.y}px`)
    })
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    document.documentElement.style.removeProperty('--move-x')
    document.documentElement.style.removeProperty('--move-y')
  })
</script>
<template>
  <jay-background :is-mobile="general.isMobile" :background-src="home.backgroundSrc" :background-blur="home.backgroundBlur" :background-brightness="home.backgroundBrightness" :background-scale="home.backgroundScale" />
</template>
