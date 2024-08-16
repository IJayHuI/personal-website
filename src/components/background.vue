<script setup>
  import { ref } from 'vue'
  import { loadProject, backgroundSrc } from '../pinia'
  import axios from 'axios'

  const src = ref('')
  axios
    .get('/background/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
    .then((res) => {
      src.value = backgroundSrc().src = 'https://cn.bing.com' + res.data.images[0].url
      loadProject().backgroundImg.text = '当前正在使用 Bing 壁纸作为背景'
      loadProject().backgroundImg.type = 'success'
    })
    .catch(() => {
      src.value = '../../public/backgroundImg/background' + Math.round(Math.random() * (10 - 1) + 1) + '.jpg'
      loadProject().backgroundImg.text = 'Bing 壁纸获取失败，使用站内壁纸代替'
      loadProject().backgroundImg.type = 'warning'
    })
    .finally(() => {
      setTimeout(() => {
        loadProject().backgroundImg.tag = true
      }, 500)
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
    transition: filter var(--theme-transition-time);
    filter:  brightness(var(--background-image-filter));
  }
</style>
