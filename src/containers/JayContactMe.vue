<script setup lang="ts">
  import JayContactMe from '../components/home/JayContactMe.vue'

  import { useStores } from '../stores'

  const { general } = useStores()

  import homeConfig from '../configs/home.json'
</script>

<template>
  <jay-contact-me :contact-list="homeConfig.contactMe" :is-mobile="general.isMobile" />
</template>
