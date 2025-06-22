<script setup>
  import { ref } from 'vue'
  import { baseUrl, loadingStatus } from '@/main'
  import { useMessage } from 'naive-ui'
  import axios from 'axios'

  const message = useMessage()
  const src = ref(null)
  loadingStatus.value = true
  axios
    .get(`${baseUrl.background}/PImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN`)
    .then((response) => {
      src.value = 'https://cn.bing.com' + response.data.images[0].url
      setTimeout(() => {
        message.success('当前使用 Bing 图片作为背景')
      }, 500)
    })
    .catch((error) => {
      console.error(error)
      message.warning('Bing 壁纸加载失败，使用站内壁纸代替')
      src.value = `/localbackground/background${Math.round(Math.random() * (10 - 1) + 1)}.jpg`
    })
    .finally(() => {
      loadingStatus.value = false
    })
</script>
<template><img class="" :src="src" alt="背景图片" /></template>
<style scoped>
  img {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    -webkit-user-drag: none;
    z-index: -1;
    filter: brightness(var(--background-image-filter));
  }
</style>
