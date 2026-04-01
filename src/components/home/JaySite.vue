<script setup lang="ts">
  import * as icons from '@vicons/material'
  import type { Component } from 'vue'

  const props = withDefaults(
    defineProps<{
      isMobile?: boolean
      sites?: {
        name: string
        icon: string
        type: string
        router?: string
        link?: string
      }[]
    }>(),
    {
      isMobile: false,
      sites: () => []
    }
  )

  const renderIcon = (icon: string): Component => {
    return icons[icon as keyof typeof icons] || icons['WarningRound']
  }
</script>
<template>
  <n-card v-if="!props.isMobile" size="medium" title="站点" content-class="w-full grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    <template v-for="site in props.sites" :key="site.router">
      <router-link v-if="site.type === 'router' && site.router" :to="site.router">
        <n-card v-interaction size="medium" content-class="flex justify-center items-center gap-2 flex-row">
          <n-icon :size="30"><component :is="renderIcon(site.icon)" /></n-icon>
          <p class="text-xl font-bold">{{ site.name }}</p>
        </n-card>
      </router-link>
    </template>
    <template v-for="link in props.sites" :key="link.link">
      <a v-if="link.type === 'link' && link.link" :href="link.link" target="_blank">
        <n-card v-interaction class="w-full h-full" size="medium" content-class="flex justify-center items-center gap-2 flex-row">
          <n-icon :size="30"><component :is="renderIcon(link.icon)" /></n-icon>
          <p class="text-xl font-bold">{{ link.name }}</p>
        </n-card>
      </a>
    </template>
  </n-card>
  <n-card v-else size="small" title="站点">
    <n-carousel show-arrow :slides-per-view="3" :space-between="8" class="pb-12">
      <template v-for="site in props.sites" :key="site.router">
        <router-link v-if="site.type === 'router' && site.router" :to="site.router">
          <n-card v-interaction size="small" content-class="flex justify-center items-center gap-2 flex-col">
            <n-icon :size="27"><component :is="renderIcon(site.icon)" /></n-icon>
            <p class="text-base">{{ site.name }}</p>
          </n-card>
        </router-link>
      </template>
      <template v-for="link in props.sites" :key="link.link">
        <a v-if="link.type === 'link' && link.link" :href="link.link" target="_blank">
          <n-card v-interaction class="w-full h-full" size="small" content-class="flex justify-center items-center gap-2 flex-col">
            <n-icon :size="27"><component :is="renderIcon(link.icon)" /></n-icon>
            <p class="text-base">{{ link.name }}</p>
          </n-card>
        </a>
      </template>
    </n-carousel>
  </n-card>
</template>
