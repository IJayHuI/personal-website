<script setup>
  import { techList } from '@/services/Home'
  import { background } from '@/services/Home'
</script>
<template>
  <n-space vertical>
    <n-card class="interaction" title="简介" @touchstart=""> 一个简单的个人主页。此项目是我学前端的作品。有我在大学中的期末大作业，以及实训的项目。持续更新... </n-card>
    <n-card class="interaction" title="背景" @touchstart="">
      本站使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。 <br />
      二次元壁纸来自于 韩小韩 WebAPI 接口。
      <template #action>
        <n-space>
          <n-button tag="a" target="_blank" href="https://www.todaybing.com/">前往必应壁纸查看更多</n-button>
          <n-button tag="a" target="_blank" href="https://api.vvhan.com/">前往韩小韩 WebAPI 接口</n-button>
          <n-button tag="a" target="_blank" :href="background.img">点击查看大图</n-button>
        </n-space>
      </template>
    </n-card>
    <n-card class="interaction" title="技术栈" @touchstart="">
      <n-space>
        <n-button v-for="item in techList" tag="a" :href="item.href" target="_blank">
          {{ item.name }}
        </n-button>
      </n-space>
    </n-card>
  </n-space>
</template>
