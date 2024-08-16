<script setup lang="ts">
  import { datas } from '../main'
  import loadingState from '../App.vue'
  import Top from '../views/Top.vue'
</script>

<template>
  <Top />
  <div class="box beforeLoad" :class="{ load: loadingState }">
    <h1 class="title">Logs</h1>
    <div class="matrix" v-for="data in datas">
      <h2 class="stickyHeader" style="color: var(--fontColor)">{{ data.time }}</h2>
      <div @touchstart="" class="elementHover" v-for="content in data.content.split(',')">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .matrix > :first-child {
    grid-column: 1 / -1; /* 让第一个元素占满一整行 */
  }

  .stickyHeader {
    width: max-content;
    position: sticky;
    top: 65px;
    z-index: 9;
    padding: 15px;
    background-color: var(--backColor);
    backdrop-filter: var(--backBlur);
    -webkit-backdrop-filter: var(--backBlur);
    border-radius: var(--borderRadius);
  }
</style>
