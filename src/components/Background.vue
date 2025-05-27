<script setup>
  import { ref } from 'vue'
  import axios from 'axios'

  const src = ref(null)
  axios
    .get('/background/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
    .then((response) => {
      src.value = 'https://cn.bing.com' + response.data.images[0].url
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
