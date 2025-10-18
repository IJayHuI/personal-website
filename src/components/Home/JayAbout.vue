<script setup>
  import { background } from '@/services/Home'
  const props = defineProps({
    cardSize: { type: String, required: false, default: 'medium' }
  })
</script>
<template>
  <n-card :size="props.cardSize" v-slide-in class="interaction" title="简介" @touchstart=""> <p>一个简单的个人主页。此项目是我学前端的作品。有我在大学中的期末大作业，以及实训的项目。持续更新...</p></n-card>
  <n-card :size="props.cardSize" v-slide-in class="interaction" title="背景" @touchstart="">
    <p class="text-base font-bold">下划查看清晰图片。</p>
    <p>本站使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。</p>
    <template #action>
      <n-space>
        <n-button secondary round tag="a" target="_blank" href="https://www.todaybing.com/">前往必应壁纸查看更多</n-button>
        <n-button secondary round tag="a" target="_blank" :href="background.img">全屏打开背景</n-button>
      </n-space>
    </template>
  </n-card>
</template>
