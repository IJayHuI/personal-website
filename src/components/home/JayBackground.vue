<script setup lang="ts">
/**
 * 背景壁纸组件
 * 展示全屏背景图，桌面端跟随鼠标移动做视差效果（gsap）
 */
import { onMounted, onUnmounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { useGeneralStore, useHomeStore } from '../../stores'
import { calculateMouseMove } from '../../utils'

const general = useGeneralStore()
const home = useHomeStore()

const background = ref<HTMLImageElement | null>(null)

// 鼠标移动时，背景图做小幅视差偏移
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

// 桌面端才启用鼠标视差
onMounted(() => {
  if (!general.isMobile) window.addEventListener('mousemove', handleMouseMove)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
// 设备类型变化时动态添加/移除鼠标监听
watch(
  () => general.isMobile,
  (isMobile) => {
    if (isMobile) {
      window.removeEventListener('mousemove', handleMouseMove)
      gsap.to(background.value, { x: 0, y: 0 })
    } else {
      window.addEventListener('mousemove', handleMouseMove)
    }
  }
)
</script>
<template>
  <img ref="background" class="fixed w-full h-full object-cover bg-cover -z-9" :src="home.backgroundSrc" alt="背景图片" id="background" />
</template>
