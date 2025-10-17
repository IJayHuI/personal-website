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
</script>
<template>
  <p class="text-xl">{{ datetime.year }}年 {{ datetime.month }}月 {{ datetime.today }}日 星期{{ datetime.dayOfWeek }}</p>
  <p class="text-5xl">{{ datetime.time }}</p>
</template>
