<script setup lang="ts">
  import JaySecondPage from '../../components/about/JaySecondPage.vue'

  import { useStores } from '../../stores'

  const { home } = useStores()
  const backgroundList = [
    home.bingBackground.src,
    '/local-background/background1.jpg',
    '/local-background/background2.jpg',
    '/local-background/background3.jpg',
    '/local-background/background4.jpg',
    '/local-background/background5.jpg',
    '/local-background/background6.jpg',
    '/local-background/background7.jpg',
    '/local-background/background8.jpg',
    '/local-background/background9.jpg',
    '/local-background/background10.jpg'
  ]
</script>
<template>
  <jay-second-page :bing-background="home.bingBackground" :background-list="backgroundList" />
</template>
