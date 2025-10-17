<script setup>
  import { UTurnLeftRound } from '@vicons/material'
  import { headIconClick, headIconRotateClick, headIcon } from '@/services/Home'
</script>
<template>
  <div class="w-full aspect-square perspective-normal interaction" @click="headIconClick" @touchstart="">
    <div class="w-full h-full absolute duration-500 transition-transform backface-hidden" :class="headIcon.rotateStatus ? '-rotate-y-180' : ''">
      <div class="w-full h-full absolute rounded-full" :style="headIcon.imgs.background"></div>
      <img class="w-full h-full absolute" :src="headIcon.imgs.icon" />
    </div>
    <div class="w-full h-full absolute duration-500 transition-transform backface-hidden flex justify-center items-center rotate-y-180" :class="headIcon.rotateStatus ? '!rotate-y-0' : ''" @click="headIconRotateClick">
      <div class="w-full h-full absolute rounded-full" :style="headIcon.imgs.background"></div>
      <p class="z-9 text-2xl">{{ headIcon.infos.text }}</p>
    </div>
    <n-button @click.stop @click="headIcon.rotateStatus = !headIcon.rotateStatus" size="large" type="info" circle class="z-9 !absolute right-5 bottom-5">
      <n-icon>
        <UTurnLeftRound />
      </n-icon>
    </n-button>
  </div>
</template>
