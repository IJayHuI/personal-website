<script setup>
  import { datas } from '@/services/Project'
</script>
<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mb-4">
    <n-card v-for="item in datas.data">
      <template #cover>
        <img :src="item.image" :alt="item.name" />
      </template>
      <h2>{{ item.name }}</h2>
      <p>{{ item.introduction }}</p>
      <template #action>
        <n-space>
          <n-button secondary tag="a" :href="item.github_link" target="_blank">前往 Github</n-button>
          <n-button secondary type="success" v-if="item.web_link != null" tag="a" :href="item.web_link" target="_blank">打开看看</n-button>
        </n-space>
      </template>
    </n-card>
  </div>
</template>
