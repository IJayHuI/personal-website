<script setup>
  import Background from '@/components/Background.vue'
  import { loadingStatus, theme, isMobile } from '@/main'
  import { zhCN, dateZhCN } from 'naive-ui'

  const themeOverrides = {
    Spin: {
      opacitySpinning: 1
    }
  }
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <n-spin :show="loadingStatus" :size="100" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0">
        <Background />
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
