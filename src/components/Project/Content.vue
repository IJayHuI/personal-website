<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })
</script>
<template>
  <n-card v-for="item in data">
    <template #cover>
      <img :src="'https://strapi.jayhu.site' + item.image.formats.small.url" :alt="item.name" />
    </template>
    <h2>{{ item.name }}</h2>
    <p>{{ item.introduction }}</p>
    <template #action>
      <n-space>
        <n-button tag="a" :href="item.githubLink" target="_blank">前往 Github</n-button>
        <n-button type="success" v-if="item.webLink != null" tag="a" :href="item.webLink" target="_blank">打开看看</n-button>
      </n-space>
    </template>
  </n-card>
</template>
