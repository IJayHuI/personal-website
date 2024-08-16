<script setup>
  import { onMounted } from 'vue'
  import { ElMessage, ElLoading } from 'element-plus'
  import background from './components/background.vue'
  import left from './components/left.vue'
  import right from './components/right.vue'
  import bottom from './components/bottom.vue'
  import { loadProject } from './pinia'

  const load = ElLoading.service({
    customClass: 'elLoading'
  })
  document.querySelector('.el-loading-spinner').innerHTML = `<div class="circles"><div class="circle"></div></div>`
  onMounted(() => {
    window.onload = () => {
      loadProject().interfaceLoading = true
    }
  })

  loadProject().$subscribe((mutation) => {
    if (loadProject().interfaceLoading && loadProject().backgroundImg.tag) {
      load.close()
      ElMessage({ message: '你好，欢迎来到我的网站', customClass: 'elMessage', type: 'success' })
      ElMessage({ message: loadProject().backgroundImg.text, customClass: 'elMessage', type: loadProject().backgroundImg.type })
    }
  })
</script>

<template>
  <background></background>
  <div class="box">
    <left></left>
    <right></right>
  </div>
  <bottom></bottom>
</template>
