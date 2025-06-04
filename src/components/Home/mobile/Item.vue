<script setup>
  import { items } from '../../../services/Home'
  import * as icons from '@vicons/material'

  const emit = defineEmits(['itemClick'])
</script>

<template>
  <n-card @touchstart="" class="interaction" v-for="item in items" size="huge" @click="emit('itemClick', item)">
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 10px">
      <n-icon size="30"><component :is="icons[item.icon]" /></n-icon>
      <h4>{{ item.name }}</h4>
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
