<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isMobile: boolean
      backgroundSrc: string
    }>(),
    {
      isMobile: false,
      backgroundSrc: ''
    }
  )
</script>
<template>
  <img v-if="!props.isMobile" class="fixed w-full h-full object-cover bg-cover -z-9 translate-[var(--move-x)] translate-y-[var(--move-y)]" :src="props.backgroundSrc" alt="背景图片" id="background" />
  <img v-else class="fixed w-full h-full object-cover bg-cover -z-9" :src="props.backgroundSrc" alt="背景图片" id="background" />
</template>
