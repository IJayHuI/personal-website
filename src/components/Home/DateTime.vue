<script setup>
  import { ref } from 'vue'

  let now = new Date()
  const dayOfWeekChinese = ['日', '一', '二', '三', '四', '五', '六']
  const year = ref(now.getFullYear())
  const month = ref(now.getMonth() + 1)
  const today = ref(now.getDate())
  const dayOfWeek = ref(dayOfWeekChinese[now.getDay()])
  let time = ref(now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0'))
  setInterval(() => {
    now = new Date()
    time.value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0')
  }, 1000)
</script>
<template>
  <n-card class="interaction" size="huge" @touchstart="">
    <div class="date">{{ year }}年 {{ month }}月 {{ today }}日 星期{{ dayOfWeek }}</div>
    <div class="time">{{ time }}</div>
  </n-card>
</template>
<style scoped>
  .date,
  .time {
    text-align: center;
  }

  .date {
    font-size: 1.3rem;
  }

  .time {
    font-size: 3rem;
  }
</style>
