<script setup>
  const change = () => {
    background.value.style.backgroundImage = 'url(../../public/headIcon/background' + Math.round(Math.random() * (4 - 1) + 1) + '.jpg)'
    icon.value.style.backgroundImage = 'url(../../public/headIcon/icon' + Math.round(Math.random() * (6 - 1) + 1) + '.png)'
  }
</script>
<template>
  <div class="background"></div>
  <div class="icon"></div>
  <div class="back"></div>
</template>

<style scoped>
  .background,
  .icon {
    width: 350px;
    height: 350px;
  }
</style>
