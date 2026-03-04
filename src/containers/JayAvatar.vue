<script setup lang="ts">
  import JayAvatar from '../components/home/JayAvatar.vue'

  import { useStores } from '../stores'

  const { home } = useStores()
  const avatarBackColor: string[] = [
    '135deg, #FDEB71 10%, #F8D800 100%',
    '135deg, #E2B0FF 10%, #9F44D3 100%',
    '135deg, #FEB692 10%, #EA5455 100%',
    '135deg, #90F7EC 10%, #32CCBC 100%',
    '135deg, #A0FE65 10%, #FA016D 100%',
    '135deg, #81FFEF 10%, #F067B4 100%',
    '135deg, #EE9AE5 10%, #5961F9 100%',
    '135deg, #70F570 10%, #49C628 100%'
  ]
  const avatarBackText: string[] = ['你好', '这里没有东西', '哟，又点了一次！', '真没有！', '你有点执着啊！', '你还在点？认真的吗？', '够了吧，这真没东西！', '行行行，你赢了！', '最后一次了，别再点了！']

  const setRotateStatus = () => {
    home.avatarRotateStatus = !home.avatarRotateStatus
  }
  const avatarBackClick = () => {
    home.avatarClickCountAdd()
    const selectedColor = avatarBackColor[Math.floor(Math.random() * avatarBackColor.length)]
    if (selectedColor !== undefined) home.setAvatarBackColor(selectedColor)
    if (home.avatarClickCount < avatarBackText.length) {
      const selectedText = avatarBackText[home.avatarClickCount]
      if (selectedText !== undefined) home.setAvatarBackText(selectedText)
    } else home.setAvatarBackText(`算了，你点吧！统计：${home.avatarClickCount - avatarBackText.length}`)
  }
</script>
<template>
  <jay-avatar :rotate-status="home.avatarRotateStatus" :set-rotate-status="setRotateStatus" :avatar-back-click="avatarBackClick" :back-color="home.avatarBackColor" :back-text="home.avatarBackText" />
</template>
