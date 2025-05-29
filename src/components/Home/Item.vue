<script setup>
  import items from './config.json'
  import * as icons from '@vicons/material'
  import router from '../../routes'

  const handleClick = (item) => {
    if (item.type == 'router') {
      router.push(item.router)
    }
  }
</script>

<template>
  <n-card class="interaction" v-for="item in items" size="huge" @click="handleClick(item)">
    <template #cover>
      <div style="display: flex; justify-content: center; align-items: center; padding: 28px 0px 0px">
        <n-icon size="35"><component :is="icons[item.icon]" /></n-icon>
      </div>
    </template>
    <h3>{{ item.name }}</h3>
  </n-card>
</template>

<style scoped>
  .n-card {
    align-items: center;
    gap: 10px;
  }

  .interaction {
    cursor: pointer;
  }
</style>
