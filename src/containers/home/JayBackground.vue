<script setup lang="ts">
  import { onBeforeMount, onMounted, onUnmounted } from 'vue'
  import { useMessage } from 'naive-ui'

  import JayBackground from '../../components/home/JayBackground.vue'

  import { useStores } from '../../stores'

  import { getBackground, type GetBackgroundResult } from '../../lib/background'

  const { general, home } = useStores()
  const message = useMessage()
  const strength = 20

  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 2
    const y = (e.clientY / innerHeight - 0.5) * 2
    document.documentElement.style.setProperty('--move-x', `${x * strength}px`)
    document.documentElement.style.setProperty('--move-y', `${y * strength}px`)
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
