<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isMobile: boolean
      backgroundSrc: string
      backgroundBlur?: number
      backgroundBrightness?: number
      backgroundScale?: number
    }>(),
    {
      isMobile: false,
      backgroundSrc: '',
      backgroundBlur: 20,
      backgroundBrightness: 70,
      backgroundScale: 130
    }
  )
</script>
<template>
  <img
    v-if="!props.isMobile"
    class="fixed w-full h-full object-cover bg-cover -z-9"
    :style="{
      filter: `blur(${props.backgroundBlur}px) brightness(${props.backgroundBrightness}%)`,
      transform: `scale(${props.backgroundScale}%) translate(var(--move-x, 0px), var(--move-y, 0px))`
    }"
    :src="props.backgroundSrc"
    alt="背景图片"
    id="background" />
  <img
    v-else
    class="fixed w-full h-full object-cover bg-cover -z-9"
    :style="{
      filter: `blur(${props.backgroundBlur}px) brightness(${props.backgroundBrightness}%)`,
      transform: `scale(${props.backgroundScale}%)`
    }"
    :src="props.backgroundSrc"
    alt="背景图片"
    id="background" />
</template>
