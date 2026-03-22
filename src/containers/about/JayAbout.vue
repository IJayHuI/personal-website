<script setup lang="ts">
  import type { Component } from 'vue'

  import JayAbout from '../../components/about/JayAbout.vue'
  import JayFirstPage from '../../components/about/JayFirstPage.vue'
  import JayThirdPage from '../../components/about/JayThirdPage.vue'
  import JayFourthPage from '../../components/about/JayFourthPage.vue'
  import JayFifthPage from '../../components/about/JayFifthPage.vue'

  import JaySecondPage from './JaySecondPage.vue'

  import { useStores } from '../../stores'

  const { general, home } = useStores()
  const sections: Component[] = [JayFirstPage, JaySecondPage, JayThirdPage, JayFourthPage, JayFifthPage]
</script>

<template>
  <jay-about :sections="sections" :is-mobile="general.isMobile" :bing-background-src="home.bingBackgroundSrc" />
</template>
