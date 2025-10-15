<script setup>
  import { datas } from '@/services/Project'
</script>
<template>
  <n-card v-for="item in datas.data">
    <template #cover>
      <img :src="item.image" :alt="item.name" />
    </template>
    <h2>{{ item.name }}</h2>
    <p>{{ item.introduction }}</p>
    <template #action>
      <n-space>
        <n-button tag="a" :href="item.github_link" target="_blank">前往 Github</n-button>
        <n-button type="success" v-if="item.web_link != null" tag="a" :href="item.web_link" target="_blank">打开看看</n-button>
      </n-space>
    </template>
  </n-card>
</template>
