<script setup lang="ts">
  import JayFourthPage from '../../components/about/JayFourthPage.vue'

  import { useStores } from '../../stores'

  const { general } = useStores()
</script>
<template>
  <jay-fourth-page :is-mobile="general.isMobile" />
</template>
