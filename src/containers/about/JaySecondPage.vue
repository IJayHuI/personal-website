<script setup lang="ts">
  import JaySecondPage from '../../components/about/JaySecondPage.vue'

  import { useStores } from '../../stores'

  const { home } = useStores()
</script>
<template>
  <jay-second-page :bing-background-src="home.bingBackgroundSrc" />
</template>
