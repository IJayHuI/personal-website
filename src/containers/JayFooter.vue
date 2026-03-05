<script setup lang="ts">
  import JayFooter from '../components/JayFooter.vue'

  const appVersion = __APP_VERSION__
</script>

<template>
  <jay-footer :app-version="appVersion" />
</template>
