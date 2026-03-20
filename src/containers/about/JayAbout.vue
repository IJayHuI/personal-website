<script setup lang="ts">
  import JayAbout from '../../components/about/JayAbout.vue'
  
  import aboutConfig from '../../configs/about.json'
  
  import { useStores } from '../../stores'

  const { general, home } = useStores()
</script>

<template>
  <jay-about :sections="aboutConfig.sections" :is-mobile="general.isMobile" :bing-background-src="home.backgroundSrc" />
</template>
