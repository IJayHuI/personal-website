<script setup>
  import { ArrowUpwardRound } from '@vicons/material'
  import { background } from '@/services/Home'
  const props = defineProps({
    size: { type: Number, required: false, default: 30 }
  })
</script>
<template>
  <div class="w-full flex flex-col justify-center items-center mt-5" :style="{ color: background.fontColor }">
    <n-icon :size="props.size" style="animation: floatY 8s infinite">
      <ArrowUpwardRound />
    </n-icon>
    <p style="animation: floatY 6s 0.1s infinite">向上滑动继续浏览</p>
  </div>
</template>
<style>
  @keyframes floatY {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-20px);
    }
    40% {
      transform: translateY(0);
    }
    /* 60%~100% 保持静止，实现“停几秒”的效果 */
    100% {
      transform: translateY(0);
    }
  }
</style>
