<script setup lang="ts">
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

onMounted(() => {
  home.setDatetime(new Date())
  timer = setInterval(() => {
    home.setDatetime(new Date())
  }, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
<template>
  <div>
    <p :class="`${props.dateTextAlign} ${props.dateTextSize}`">{{ home.datetime.getFullYear() }}年 {{ home.datetime.getMonth() + 1 }}月 {{ home.datetime.getDate() }}日</p>
    <p :class="`${props.dateTextAlign} ${props.dateTextSize}`">
      星期{{
        home.datetime.getDay() === 0 ? '日' : home.datetime.getDay() === 1 ? '一' : home.datetime.getDay() === 2 ? '二' : home.datetime.getDay() === 3 ? '三' : home.datetime.getDay() === 4 ? '四' : home.datetime.getDay() === 5 ? '五' : '六'
      }}
    </p>
  </div>
  <p :class="`${props.timeTextAlign} ${props.timeTextSize}`">{{ home.datetime.getHours().toString().padStart(2, '0') }}:{{ home.datetime.getMinutes().toString().padStart(2, '0') }}:{{ home.datetime.getSeconds().toString().padStart(2, '0') }}</p>
</template>
