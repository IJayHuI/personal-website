<script setup lang="ts">
  import { UTurnLeftRound } from '@vicons/material'

  const props = withDefaults(
    defineProps<{
      rotateStatus?: boolean
      backColor?: string
      backText?: string
      setRotateStatus?: () => void
      avatarBackClick?: () => void
    }>(),
    {
      rotateStatus: false,
      backColor: '135deg, #FDEB71 10%, #F8D800 100%',
      backText: '',
      setRotateStatus: () => {},
      avatarBackClick: () => {}
    }
  )
</script>
<template>
  <div class="w-full *:duration-500 *:transition-transform *:backface-hidden *:rounded-full *:absolute *:h-full *:w-full aspect-square perspective-normal interaction" @touchstart="">
    <img :class="` ${props.rotateStatus ? '-rotate-y-180' : ''}`" src="/avatar.jpg" />
    <div class="overflow-hidden flex justify-center items-center rotate-y-180" :class="props.rotateStatus ? '!rotate-y-0' : ''" @click="props.avatarBackClick">
      <div class="w-full h-full absolute" :style="`background-image: linear-gradient(${props.backColor})`"></div>
      <p class="z-9 text-2xl">{{ props.backText }}</p>
    </div>
    <n-button @click.stop @click="props.setRotateStatus" size="large" type="info" circle class="z-9 !absolute right-6 bottom-6">
      <n-icon>
        <UTurnLeftRound />
      </n-icon>
    </n-button>
  </div>
</template>
