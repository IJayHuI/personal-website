<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isDark?: boolean
    }>(),
    {
      isDark: false
    }
  )
</script>
<template>
  <div class="circle dark" v-if="!props.isDark"></div>
  <div class="circle light" v-else></div>
</template>
<style scoped>
  .circle,
  .circle::after,
  .circle::before {
    border-radius: 50%;
    border: 3px solid transparent;
  }
  .circle::after,
  .circle::before {
    content: '';
    position: absolute;
  }
  .circle {
    width: 100%;
    height: 100%;
    position: relative;
    animation: spin 1.8s linear infinite;
  }
  /* 第二层 */
  .circle::before {
    inset: 5px;
    animation: spin-reverse 0.6s linear infinite;
  }
  /* 第三层 */
  .circle::after {
    inset: 12px;
    animation: spin 1s linear infinite;
  }
  .light {
    border-top-color: white;
  }
  .light::before {
    border-top-color: #a4a4a4;
  }
  .light::after {
    border-top-color: #d3d3d3;
  }
  .dark {
    border-top-color: black;
  }
  .dark::before {
    border-top-color: #666;
  }
  .dark::after {
    border-top-color: #999;
  }
  /* 顺时针 */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* 逆时针 */
  @keyframes spin-reverse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>
