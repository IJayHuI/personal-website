<script setup>
  import { isMobile } from './main'
  import Background from './components/Background.vue'
</script>

<template>
  <Background />
  <router-view name="mobile" v-if="isMobile" />
  <router-view name="desktop" v-else />
</template>
