<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      bingBackgroundSrc: string
    }>(),
    {
      bingBackgroundSrc: ''
    }
  )
</script>
<template>
  <img class="absolute inset-0 w-full h-full object-cover" :src="props.bingBackgroundSrc" />
  <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
  <div class="text-white z-10 relative mx-auto w-xl h-full flex flex-col justify-center">
    <p class="font-semibold text-[clamp(1rem,8vw,6rem)] text-center">背景</p>
    <p class="text-base indent-8">主页使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。</p>
    <!-- <p class="text-base indent-8">这里展示了站内壁纸和 Bing 每日精选壁纸，让页面更有视觉氛围。</p> -->
  </div>
</template>
