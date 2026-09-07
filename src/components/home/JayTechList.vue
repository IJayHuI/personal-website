<script setup lang="ts">
import homeConfig from '../../configs/home.json'
</script>
<template>
  <n-button round secondary size="small" v-for="item in homeConfig.techList" tag="a" :href="item.href" target="_blank">
    {{ item.name }}
  </n-button>
</template>
