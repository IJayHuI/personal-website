<script setup lang="ts">
  import * as icons from '@vicons/material'
  import type { Component } from 'vue'

  const props = withDefaults(
    defineProps<{
      cardSize?: string
      iconSize?: number
      direction?: string
      textClass?: string
      itemSize?: string
      sites?: {
        name: string
        icon: string
        type: string
        router?: string
        link?: string
      }[]
    }>(),
    {
      cardSize: 'medium',
      iconSize: 35,
      direction: 'row',
      textClass: 'text-xl font-bold',
      itemSize: '200px',
      sites: () => []
    }
  )

  const renderIcon = (icon: string): Component => {
    return icons[icon as keyof typeof icons] || icons['WarningRound']
  }
</script>
<template>
  <n-card :size="props.cardSize" title="站点" content-class="w-full grid gap-2 grid-cols-[repeat(auto-fill,minmax(var(--item-size),1fr))]" :style="{ '--item-size': props.itemSize }">
    <template v-for="site in props.sites" :key="site.router">
      <router-link v-if="site.type === 'router' && site.router" :to="site.router">
        <n-card class="interaction" :size="props.cardSize" :content-class="`flex justify-center items-center gap-2 flex-${props.direction}`">
          <n-icon :size="props.iconSize"><component :is="renderIcon(site.icon)" /></n-icon>
          <p :class="props.textClass">{{ site.name }}</p>
        </n-card>
      </router-link>
    </template>
    <template v-for="link in props.sites" :key="link.link">
      <a v-if="link.type === 'link' && link.link" :href="link.link" target="_blank">
        <n-card class="interaction w-full h-full" :size="props.cardSize" :content-class="`flex justify-center items-center gap-2 flex-${props.direction}`">
          <n-icon :size="props.iconSize"><component :is="renderIcon(link.icon)" /></n-icon>
          <p :class="props.textClass">{{ link.name }}</p>
        </n-card>
      </a>
    </template>
  </n-card>
</template>
