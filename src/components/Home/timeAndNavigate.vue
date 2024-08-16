<script setup lang="ts">
  import { ref } from 'vue'
  const dayOfWeekChinese = ['日', '一', '二', '三', '四', '五', '六']
  let now = new Date()
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
  <div class="content">
    <div @touchstart="" class="elementHover datetime">
      <div class="date">{{ year }}年 {{ month }}月 {{ today }}日 星期{{ dayOfWeek }}</div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="navigate">
      <router-link @touchstart="" class="elementHover" :to="{ path: '/navigates' }">
        <img class="navIcon" src="/public/navIcon/navigate.svg" />
        <span>导航</span>
      </router-link>
      <router-link @touchstart="" class="elementHover" :to="{ path: '/demos' }">
        <img class="navIcon" src="/public/navIcon/demo.svg" />
        <span>小项目</span>
      </router-link>
      <router-link @touchstart="" class="elementHover" :to="{ path: '/logs' }">
        <img class="navIcon" src="/public/navIcon/log.svg" />
        <span>日志</span>
      </router-link>
      <router-link @touchstart="" class="elementHover" :to="{ path: '/about' }">
        <img class="navIcon" src="/public/navIcon/about.svg" />
        <span>关于</span>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
  .elementHover {
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-drag: none;
  }

  .datetime {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: default;
  }

  .date {
    font-size: 22px;
  }

  .time {
    font-family: timeFont;
    font-size: 50px;
  }

  .content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .navigate {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .navIcon {
    margin-right: 10px;
    width: 25px;
  }

  .navigate .elementHover {
    height: 50px;
    font-size: 17px;
  }
</style>
