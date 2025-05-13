<script setup>
  import { nextTick, ref } from 'vue'
  import axios from 'axios'
  import { marked } from 'marked'

  const datas = ref(null)
  const load = ref(true)
  const showButton = ref(false)

  nextTick(() => {
    document.querySelector('.el-loading-spinner').innerHTML = `<div class="circles"><div class="circle"></div></div>`
  })
  const getData = () => {
    showButton.value = false
    load.value = true
    nextTick(() => {
      document.querySelector('.el-loading-spinner').innerHTML = `<div class="circles"><div class="circle"></div></div>`
    })
    setTimeout(() => {
      axios
        .get('/server/web-logs?sort=date:desc&fields[0]=date&fields[1]=content')
        .then((response) => {
          datas.value = response.data.data
          showButton.value = false
        })
        .catch((error) => {
          showButton.value = true
        })
        .finally(() => {
          load.value = false
        })
    }, 300)
  }
  getData()
</script>
<template>
  <el-button style="font-size: 21px; width: 100%" v-if="showButton" @click="getData">获取数据失败，请重试</el-button>
  <el-timeline v-else v-loading="load" element-loading-custom-class="loading" style="width: 100%; height: 100%">
    <template v-for="data in datas">
      <el-timeline-item :timestamp="data.attributes.date" placement="top">
        <el-card v-html="marked(data.attributes.content)"></el-card>
      </el-timeline-item>
    </template>
  </el-timeline>
</template>
<style scoped>
  h1 {
    color: var(--font-color);
  }
</style>
