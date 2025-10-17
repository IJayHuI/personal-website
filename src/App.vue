<script setup>
  import JayBackground from '@/components/JayBackground.vue'
  import { loadingStatus, isMobile } from '@/main'
  import { theme } from '@/services/Home'
  import { themeOverrides } from '@/services/General'
  import { zhCN, dateZhCN } from 'naive-ui'
  import router from '@/routes'
</script>

<template>
  <n-config-provider :theme="theme.current" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <n-spin class="!absolute top-0 right-0 bottom-0 left-0" :show="loadingStatus" :size="100">
        <jay-background v-if="router.currentRoute.value.path == '/'" />
        <router-view :name="isMobile ? 'mobile' : 'desktop'" v-slot="{ Component }">
          <transition name="scale">
            <component :is="Component" class="page-component" />
          </transition>
        </router-view>
      </n-spin>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
  .page-component {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
</style>
