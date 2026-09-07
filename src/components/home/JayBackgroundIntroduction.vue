<script setup lang="ts">
/**
 * 壁纸介绍卡片
 * 说明壁纸来源（Bing），提供前往必应壁纸和全屏打开背景的链接
 */
import { useHomeStore } from '../../stores'

const home = useHomeStore()

withDefaults(
  defineProps<{
    cardSize?: string
  }>(),
  {
    cardSize: 'medium'
  }
)
</script>
<template>
  <n-card :size="cardSize" title="背景">
    <p class="text-base font-bold">下划查看清晰图片。</p>
    <p>本站使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。</p>
    <template #action>
      <n-space>
        <n-button v-magnetic secondary round tag="a" target="_blank" href="https://www.todaybing.com/">前往必应壁纸查看更多</n-button>
        <n-button v-magnetic secondary round tag="a" target="_blank" :href="home.bingBackground.src">全屏打开背景</n-button>
      </n-space>
    </template>
  </n-card>
</template>
