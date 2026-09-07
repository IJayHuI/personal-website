<script setup lang="ts">
import { UTurnLeftRound } from '@vicons/material'
import { useHomeStore } from '../../stores'
import homeConfig from '../../configs/home.json'

const home = useHomeStore()

const setRotateStatus = () => {
  home.avatarRotateStatus = !home.avatarRotateStatus
}
const avatarBackClick = () => {
  home.avatarClickCountAdd()
  const colors = homeConfig.avatar.backColor
  const selectedColor = colors[Math.floor(Math.random() * colors.length)]
  if (selectedColor !== undefined) home.setAvatarBackColor(selectedColor)
  const texts = homeConfig.avatar.backText
  if (home.avatarClickCount < texts.length) {
    const selectedText = texts[home.avatarClickCount]
    if (selectedText !== undefined) home.setAvatarBackText(selectedText)
  } else {
    home.setAvatarBackText(`算了，你点吧！统计：${home.avatarClickCount - texts.length}`)
  }
}
</script>
<template>
  <div v-interaction class="w-full *:duration-500 *:transition-transform *:backface-hidden *:rounded-full *:absolute *:h-full *:w-full aspect-square perspective-normal">
    <img :class="` ${home.avatarRotateStatus ? '-rotate-y-180' : ''}`" src="/avatar.jpg" />
    <div class="overflow-hidden flex justify-center items-center rotate-y-180" :class="home.avatarRotateStatus ? '!rotate-y-0' : ''" @click="avatarBackClick">
      <div class="w-full h-full absolute" :style="`background-image: linear-gradient(${home.avatarBackColor})`"></div>
      <p class="z-9 text-2xl">{{ home.avatarBackText }}</p>
    </div>
    <n-button @click.stop @click="setRotateStatus" size="large" type="info" circle class="z-9 !absolute right-6 bottom-6">
      <n-icon>
        <UTurnLeftRound />
      </n-icon>
    </n-button>
  </div>
</template>
