<script setup>
  import { loadingStatus } from '@/main'
  import { background, getBackground } from '@/services/Home'
  import { useMessage } from 'naive-ui'

  const message = useMessage()
  loadingStatus.value = true
  getBackground(localStorage.getItem('background-type'))
    .then((response) => {
      message.success(response)
    })
    .catch(() => {
      getBackground('local')
      message.warning('壁纸加载失败，使用站内壁纸代替')
    })
    .finally(() => {
      loadingStatus.value = false
    })
</script>
<template><img class="" :src="background.img" alt="背景图片" /></template>
<style scoped>
  img {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    -webkit-user-drag: none;
    z-index: -1;
  }
</style>
