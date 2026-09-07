<script setup lang="ts">
/**
 * 日期时间组件
 * 每秒更新一次 currentTime，展示年月日、星期、时分秒
 */
import { onMounted, onUnmounted } from 'vue'
import { useHomeStore } from '../../stores'

const home = useHomeStore()

const props = withDefaults(
  defineProps<{
    dateTextSize?: string
    timeTextSize?: string
    dateTextAlign?: string
    timeTextAlign?: string
  }>(),
  {
    dateTextSize: 'text-xl',
    timeTextSize: 'text-5xl',
    dateTextAlign: 'text-left',
    timeTextAlign: 'text-left'
  }
)

let timer: ReturnType<typeof setInterval> | null = null

// 挂载时立即更新一次，之后每秒更新
onMounted(() => {
  home.setCurrentTime(new Date())
  timer = setInterval(() => {
    home.setCurrentTime(new Date())
  }, 1000)
})
// 卸载时清除定时器
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
<template>
  <div>
    <p :class="`${props.dateTextAlign} ${props.dateTextSize}`">{{ home.currentTime.getFullYear() }}年 {{ home.currentTime.getMonth() + 1 }}月 {{ home.currentTime.getDate() }}日</p>
    <p :class="`${props.dateTextAlign} ${props.dateTextSize}`">
      星期{{
        home.currentTime.getDay() === 0 ? '日' : home.currentTime.getDay() === 1 ? '一' : home.currentTime.getDay() === 2 ? '二' : home.currentTime.getDay() === 3 ? '三' : home.currentTime.getDay() === 4 ? '四' : home.currentTime.getDay() === 5 ? '五' : '六'
      }}
    </p>
  </div>
  <p :class="`${props.timeTextAlign} ${props.timeTextSize}`">{{ home.currentTime.getHours().toString().padStart(2, '0') }}:{{ home.currentTime.getMinutes().toString().padStart(2, '0') }}:{{ home.currentTime.getSeconds().toString().padStart(2, '0') }}</p>
</template>
