<script setup lang="ts">
  import JayLoading from './JayLoading.vue'

  const props = withDefaults(
    defineProps<{
      loadingStatus?: boolean
      loadingText?: string
    }>(),
    {
      loadingStatus: false,
      loadingText: ''
    }
  )
</script>

<template>
  <n-spin class="!absolute !z-9 top-0 right-0 bottom-0 left-0" :show="props.loadingStatus" :size="200" :rotate="false">
    <template #icon>
      <jay-loading />
    </template>
    <template #description>
      {{ props.loadingText }}
    </template>

    <router-view v-slot="{ Component }">
      <transition name="scale">
        <component :is="Component" class="!absolute w-full h-full" />
      </transition>
    </router-view>
  </n-spin>
</template>
