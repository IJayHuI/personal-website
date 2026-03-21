<script setup lang="ts">
  import { onMounted, onUnmounted, ref, watch } from 'vue'
  import gsap from 'gsap'

  import { calculateMouseMove } from '../../lib/background'

  const props = withDefaults(
    defineProps<{
      isMobile: boolean
      backgroundSrc: string
    }>(),
    {
      isMobile: false,
      backgroundSrc: ''
    }
  )

  const background = ref<HTMLImageElement | null>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!background.value) return
    const { targetX, targetY } = calculateMouseMove(e, 20)
    gsap.to(background.value, {
      x: targetX,
      y: targetY,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  onMounted(() => {
    if (!props.isMobile) window.addEventListener('mousemove', handleMouseMove)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
  watch(
    () => props.isMobile,
    (isMobile) => {
      if (isMobile) {
        window.removeEventListener('mousemove', handleMouseMove)
        gsap.to(background.value, {
          x: 0,
          y: 0
        })
      } else window.addEventListener('mousemove', handleMouseMove)
    }
  )
</script>
<template>
  <img ref="background" class="fixed w-full h-full object-cover bg-cover -z-9" :src="props.backgroundSrc" alt="背景图片" id="background" />
</template>
