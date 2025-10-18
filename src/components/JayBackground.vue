<script setup>
  import { onBeforeMount, onMounted, onUnmounted } from 'vue'
  import { loadingStatus } from '@/main'
  import { background, getBackground } from '@/services/Home'
  import { useMessage } from 'naive-ui'

  const message = useMessage()
  const strength = 20
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 2
    const y = (e.clientY / innerHeight - 0.5) * 2
    document.documentElement.style.setProperty('--move-x', `${x * strength}px`)
    document.documentElement.style.setProperty('--move-y', `${y * strength}px`)
  }
  onBeforeMount(() => {
    if (!background.value.needGetData) return
    loadingStatus.value = true
    getBackground(localStorage.getItem('background-type'))
      .then((response) => {
        message.success(response)
      })
      .catch((error) => {
        message.error(error)
      })
      .finally(() => {
        loadingStatus.value = false
      })
  })
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    document.documentElement.style.removeProperty('--move-x')
    document.documentElement.style.removeProperty('--move-y')
  })
</script>
<template>
  <img
    class="fixed w-full h-full object-cover bg-cover -z-9"
    :style="{
      filter: `blur(${background.style.blur}px) brightness(${background.style.brightness}%)`,
      transform: `scale(${background.style.scale}%) translate(var(--move-x, 0px), var(--move-y, 0px))`
    }"
    :src="background.img"
    alt="背景图片" />
</template>
