<script setup>
  import { isMobile } from './main'
  import Background from './components/Background.vue'
</script>

<template>
  <Background />
  <router-view :name="isMobile ? 'mobile' : 'desktop'" v-slot="{ Component }">
    <transition name="scale">
      <component :is="Component" class="page-component" />
    </transition>
  </router-view>
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
