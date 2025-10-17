<script setup>
  import { onBeforeMount } from 'vue'
  import axios from 'axios'
  import { yiYan } from '@/services/Home'

  onBeforeMount(() => {
    if (!yiYan.value.needGetData) return
    axios
      .get('/hitokoto/?c=i')
      .then((response) => {
        yiYan.value = response.data
        yiYan.value.needGetData = false
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  })
</script>
<template>
  <p class="text-xl">{{ yiYan.hitokoto }}</p>
  <p class="text-end">- {{ yiYan.from }}</p>
</template>
