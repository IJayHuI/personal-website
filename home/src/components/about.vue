<script setup>
  import { backgroundSrc } from '../pinia'
</script>
<template>
  <div class="aboutContainer">
    <div class="aboutBox">
      <h2>简介</h2>
      <div class="content">
        <p>一个简单的个人主页。此项目是我学前端的作品。有我在大学中的期末大作业，以及实训的项目。持续更新...</p>
      </div>
    </div>
    <div class="aboutBox">
      <h2>背景</h2>
      <div class="content">
        <p>本站使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。</p>
        <a href="https://www.todaybing.com/">点我前往必应壁纸查看更多</a>
        <a target="_blank" :href="backgroundSrc().src">点我查看背景大图</a>
      </div>
    </div>
    <div class="aboutBox">
      <h2>技术栈</h2>
      <div class="content">
        <ul>
          <li><a href="https://vitejs.cn/">Vite</a></li>
          <li><a href="https://cn.vuejs.org/">Vue</a></li>
          <li><a href="https://www.axios-http.cn/">Axios</a></li>
          <li><a href="https://element-plus.org/zh-CN/">Element Plus</a></li>
          <li><a href="https://strapi.io/">Strapi</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  * {
    color: var(--font-color);
  }
  .aboutContainer {
    display: grid;
    gap: 15px;
  }

  h2 {
    padding-left: 5px;
  }

  .content {
    padding: 10px;
    border-radius: calc(var(--border-radius));
    background-color: var(--background-color);
    box-shadow: var(--el-box-shadow-light);
    display: flex;
    flex-direction: column;
    gap:5px;
  }

  ul {
    display: grid;
    margin-left: 20px;
    gap: 5px;
  }
</style>
