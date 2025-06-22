<script setup>
  import { ref } from 'vue'
  import { baseUrl, loadingStatus } from '@/main'
  import axios from 'axios'

  const src = ref(null)
  loadingStatus.value = true
  axios
    .get(`${baseUrl.background}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN`)
    .then((response) => {
      src.value = 'https://cn.bing.com' + response.data.images[0].url
      setTimeout(() => {
        loadingStatus.value = false
      }, 500)
    })
    .catch((error) => {
      console.error(error)
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
