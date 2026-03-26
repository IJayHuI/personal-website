<script setup lang="ts">
  import JaySite from '../../components/home/JaySite.vue'

  import homeConfig from '../../configs/home.json'

  import { useStores } from '../../stores'

  const { general } = useStores()
</script>
<template>
  <jay-site :sites="homeConfig.sites" :is-mobile="general.isMobile" />
</template>
