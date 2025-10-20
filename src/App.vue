<script setup>
  import JayLoading from '@/components/JayLoading.vue'
  import { loading, isMobile } from '@/main'
  import { theme } from '@/services/Home'
  import { themeOverrides } from '@/services/General'
  import { zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="theme.current" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <n-spin class="!absolute top-0 right-0 bottom-0 left-0" :show="loading.status" :size="200" :rotate="false">
        <template #icon>
          <jay-loading />
        </template>
        <router-view :name="isMobile ? 'mobile' : 'desktop'" v-slot="{ Component }">
          <transition name="scale">
            <component :is="Component" class="!absolute w-full h-full" />
          </transition>
        </router-view>
      </n-spin>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    filter: blur(20px);
    transform: scale(0.95);
  }
</style>
