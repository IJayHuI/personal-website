<script setup lang="ts">
/**
 * 头像组件
 * 点击翻转显示背面，背面文字/颜色随点击次数变化（彩蛋）
 */
import { UTurnLeftRound } from '@vicons/material'
import { useHomeStore } from '../../stores'
import homeConfig from '../../configs/home.json'

const home = useHomeStore()

// 翻转头像（正面/背面切换）
const setRotateStatus = () => {
  home.isAvatarFlipped = !home.isAvatarFlipped
}
// 点击头像背面：计数 +1，随机切换背面颜色和文字
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
  <div class="w-full *:duration-500 *:transition-transform *:backface-hidden *:rounded-full *:absolute *:h-full *:w-full aspect-square perspective-normal">
    <img :class="` ${home.isAvatarFlipped ? '-rotate-y-180' : ''}`" src="/avatar.jpg" />
    <div class="overflow-hidden flex justify-center items-center rotate-y-180" :class="home.isAvatarFlipped ? '!rotate-y-0' : ''" @click="avatarBackClick">
      <div class="w-full h-full absolute" :style="`background-image: linear-gradient(${home.avatarBackColor})`"></div>
      <p class="z-9 text-2xl">{{ home.avatarBackText }}</p>
    </div>
    <n-button v-magnetic @click.stop @click="setRotateStatus" size="large" type="info" circle class="z-9 !absolute right-6 bottom-6">
      <n-icon>
        <UTurnLeftRound />
      </n-icon>
    </n-button>
  </div>
</template>
