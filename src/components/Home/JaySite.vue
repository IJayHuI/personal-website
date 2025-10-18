<script setup>
  import { home } from '@/services/Home'
  import * as icons from '@vicons/material'

  const props = defineProps({
    cardSize: { type: String, required: false, default: 'medium' },
    iconSize: { type: Number, required: false, default: 35 },
    direction: { type: String, required: false, default: 'row' },
    textClass: { type: String, required: false, default: 'text-xl font-bold' }
  })
</script>
<template>
  <router-link v-for="site in home.sites" :key="site.router" :to="site.router">
    <n-card class="interaction" :size="props.cardSize" :content-class="`flex justify-center items-center gap-2 flex-${props.direction}`">
      <n-icon :size="props.iconSize"><component :is="icons[site.icon]" /></n-icon>
      <p :class="props.textClass">{{ site.name }}</p>
    </n-card>
  </router-link>
  <a href="https://www.travellings.cn/go.html" target="_blank">
    <n-card class="interaction w-full h-full" :size="props.cardSize" :content-class="`flex justify-center items-center gap-2 flex-${props.direction}`">
      <n-icon :size="props.iconSize"><component :is="icons['TrainRound']" /></n-icon>
      <p :class="props.textClass">开往</p>
    </n-card>
  </a>
</template>
