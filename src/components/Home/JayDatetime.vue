<script setup>
  import { datetime } from '@/services/Home'

  let now = new Date()
  datetime.value.year = now.getFullYear()
  datetime.value.month = now.getMonth() + 1
  datetime.value.today = now.getDate()
  datetime.value.dayOfWeek = datetime.value.dayOfWeekChinese[now.getDay()]
  datetime.value.time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0')
  setInterval(() => {
    now = new Date()
    datetime.value.time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0')
  }, 1000)
  const props = defineProps({
    dateTextSize: { type: String, required: false, default: 'text-xl' },
    timeTextSize: { type: String, required: false, default: 'text-5xl' },
    dateTextAlign: { type: String, required: false, default: 'left' },
    timeTextAlign: { type: String, required: false, default: 'left' }
  })
</script>
<template>
  <div>
    <p :class="`text-${props.dateTextAlign} ${props.dateTextSize}`">{{ datetime.year }}年 {{ datetime.month }}月 {{ datetime.today }}日</p>
    <p :class="`text-${props.dateTextAlign} ${props.dateTextSize}`">星期{{ datetime.dayOfWeek }}</p>
  </div>
  <p :class="`text-${props.timeTextAlign} ${props.timeTextSize}`">{{ datetime.time }}</p>
</template>
