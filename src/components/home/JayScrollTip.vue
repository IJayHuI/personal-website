<script setup lang="ts">
  import { ArrowUpwardRound } from '@vicons/material'

  const props = withDefaults(
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
    <n-icon :size="props.size" style="animation: floatY 8s infinite">
      <arrow-upward-round />
    </n-icon>
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
