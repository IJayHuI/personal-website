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
    <template v-for="item in props.sites" :key="item.router || item.link">
      <component :is="item.type === 'router' ? 'router-link' : 'a'" :to="item.type === 'router' ? item.router : undefined" :href="item.type === 'link' ? item.link : undefined" target="_blank">
        <n-card v-interaction class="w-full h-full" size="medium" :content-class="`flex justify-center items-center gap-2 flex-row`">
          <n-icon :size="35">
            <component :is="renderIcon(item.icon)" />
          </n-icon>
          <p class="text-xl font-bold">{{ item.name }}</p>
        </n-card>
      </component>
    </template>
  </n-card>
  <n-card v-else size="small" title="站点">
    <n-carousel show-arrow :slides-per-view="3" :space-between="8" class="pb-12">
      <template v-for="item in props.sites" :key="item.router || item.link">
        <component :is="item.type === 'router' ? 'router-link' : 'a'" :to="item.type === 'router' ? item.router : undefined" :href="item.type === 'link' ? item.link : undefined" target="_blank">
          <n-card v-interaction class="w-full h-full" size="small" :content-class="`flex justify-center items-center flex-col`">
            <n-icon :size="27">
              <component :is="renderIcon(item.icon)" />
            </n-icon>
            <p class="text-base">{{ item.name }}</p>
          </n-card>
        </component>
      </template>
    </n-carousel>
  </n-card>
</template>
