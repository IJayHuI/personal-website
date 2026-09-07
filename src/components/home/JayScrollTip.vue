<script setup lang="ts">
/**
 * 滚动提示箭头
 * 首页底部向上浮动的箭头，提示用户上滑查看更多内容
 */
import { ArrowUpwardRound } from '@vicons/material'

withDefaults(
  defineProps<{
    size?: number
  }>(),
  {
    size: 36
  }
)
</script>
<template>
  <div class="w-full flex justify-center items-center mt-5 mb-5 text-white">
    <n-icon :size="size" style="animation: floatY 8s infinite">
      <arrow-upward-round />
    </n-icon>
  </div>
</template>
<style>
  @keyframes floatY {
    0% { transform: translateY(0); }
    20% { transform: translateY(-20px); }
    40% { transform: translateY(0); }
    100% { transform: translateY(0); }
  }
</style>
