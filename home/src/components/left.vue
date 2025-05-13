<script setup>
  import { screenWidth } from '../main'
  import headicon from './headIcon.vue'
  import contactme from './contactMe.vue'
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="blank" v-if="screenWidth > 833"></div>
      <headicon></headicon>
      <contactme v-if="screenWidth > 833"></contactme>
    </div>
  </div>
</template>
<style scoped>
  @media screen and (max-width: 833px) {
    .container {
      height: 40%;
    }
  }
  .blank {
    width: 100%;
    height: 115px;
  }

  .content {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
