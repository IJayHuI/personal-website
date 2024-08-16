<script setup>
  import { ref } from 'vue'
  import { screenWidth } from '../main'

  let now = new Date()
  const dayOfWeekChinese = ['日', '一', '二', '三', '四', '五', '六']
  const year = ref(now.getFullYear())
  const month = ref(now.getMonth())
  const today = ref(now.getDate())
  const dayOfWeek = ref(dayOfWeekChinese[now.getDay()])
  let time = ref(now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0'))
  setInterval(() => {
    now = new Date()
    time.value = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0')
  }, 1000)
</script>
<template>
  <div class="date" v-if="screenWidth > 833">{{ year }}年 {{ month }}月 {{ today }}日 星期{{ dayOfWeek }}</div>
  <div class="date" v-else>{{ year }}年 {{ month }}月 {{ today }}日<br />星期{{ dayOfWeek }}</div>
  <div class="time">{{ time }}</div>
</template>
<style scoped>
  .date,
  .time {
    user-select: none;
  }
  .date {
    font-size: 22px;
  }

  .time {
    font-family: timeFont;
    font-size: 55px;
  }

  @media screen and (max-width: 833px) {
    .date,
    .time {
      width: 50%;
    }

    .date {
      font-size: 16px;
    }

    .time {
      font-size: 39px;
    }
  }
</style>
