<script setup lang="ts">
  import JayLoading from './JayLoading.vue'

  const props = withDefaults(
    defineProps<{
      loadingStatus?: boolean
      isDark: boolean
      loadingText?: string
    }>(),
    {
      loadingStatus: false,
      isDark: false,
      loadingText: ''
    }
  )
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" :key="$route.fullPath" class="!absolute inset-0" />
    </transition>
  </router-view>
  <n-spin v-if="props.loadingStatus" :size="200" :rotate="false" :class="['fixed inset-0 z-50', props.isDark ? 'bg-black' : 'bg-white']">
    <template #icon><jay-loading :is-dark="props.isDark" /></template>
    <template #description>{{ props.loadingText }}</template>
  </n-spin>
</template>
