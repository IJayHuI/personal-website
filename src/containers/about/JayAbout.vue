<script setup lang="ts">
  import type { Component } from 'vue'

  import JayAbout from '../../components/about/JayAbout.vue'
  import JayFirstPage from '../../components/about/JayFirstPage.vue'
  import JayThirdPage from '../../components/about/JayThirdPage.vue'

  import JaySecondPage from './JaySecondPage.vue'
  import JayFourthPage from './JayFourthPage.vue'

  import { useStores } from '../../stores'

  const { general } = useStores()
  const sections: Component[] = [JayFirstPage, JaySecondPage, JayThirdPage, JayFourthPage]
</script>

<template>
  <jay-about :sections="sections" :is-mobile="general.isMobile" />
</template>
