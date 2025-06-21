<script setup>
  import { items } from '@/services/Home'
  import * as icons from '@vicons/material'

  const emit = defineEmits(['itemClick'])
</script>

<template>
  <n-card class="interaction" v-for="item in items" size="huge" @click="emit('itemClick', item)">
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px">
      <n-icon size="40"><component :is="icons[item.icon]" /></n-icon>
      <h3>{{ item.name }}</h3>
    </div>
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
