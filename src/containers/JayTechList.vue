<script setup lang="ts">
  import JayTechList from '../components/home/JayTechList.vue'

  import homeConfig from '../configs/home.json'
</script>

<template>
    <jay-tech-list :tech-list="homeConfig.techList" />
</template>
