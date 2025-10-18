<script setup>
  import { UTurnLeftRound } from '@vicons/material'
  import { avatarBackClick, avatar } from '@/services/Home'
</script>
<template>
  <div class="w-full *:duration-500 *:transition-transform *:backface-hidden *:rounded-full *:absolute *:h-full *:w-full aspect-square perspective-normal interaction" @touchstart="">
    <img :class="` ${avatar.rotateStatus ? '-rotate-y-180' : ''}`" src="/avatar.jpg" />
    <div class="overflow-hidden flex justify-center items-center rotate-y-180" :class="avatar.rotateStatus ? '!rotate-y-0' : ''" @click="avatarBackClick">
      <div class="w-full h-full absolute" :style="`background-image: linear-gradient(${avatar.backColor})`"></div>
      <p class="z-9 text-2xl">{{ avatar.infos.text }}</p>
    </div>
    <n-button @click.stop @click="avatar.rotateStatus = !avatar.rotateStatus" size="large" type="info" circle class="z-9 !absolute right-5 bottom-5">
      <n-icon>
        <UTurnLeftRound />
      </n-icon>
    </n-button>
  </div>
</template>
