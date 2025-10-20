<template>
  <div
    class="circle w-full h-full rounded-full !border-t-white before:rounded-full before:absolute before:!border-t-[#a4a4a4] before:top-[5px] before:right-[5px] before:bottom-[5px] before:left-[5px] after:absolute after:rounded-full after:!border-t-[#d3d3d3] after:top-[15px] after:right-[15px] after:bottom-[15px] after:left-[15px]"></div>
</template>
<style scoped>
  .circle,
  .circle::after,
  .circle::before {
    border: 3px solid transparent;
  }
  .circle {
    animation: spin 1.8s linear infinite;
  }
  .circle::before {
    animation: spin-reverse 0.6s linear infinite;
  }
  .circle::after {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-reverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
