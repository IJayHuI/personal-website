<script setup>
  import { ref, onMounted } from 'vue'
  const background = ref(null)
  const icon = ref(null)
  const change = () => {
    background.value.style.backgroundImage = 'url(../../public/headIcon/background' + Math.round(Math.random() * (4 - 1) + 1) + '.jpg)'
    icon.value.style.backgroundImage = 'url(../../public/headIcon/icon' + Math.round(Math.random() * (6 - 1) + 1) + '.png)'
  }

  onMounted(() => {
    background.value = document.querySelector('.background')
    icon.value = document.querySelector('.icon')
  })
</script>
<template>
  <div class="headBox">
    <div class="background"></div>
    <div @touchstart="" @click="change" class="icon"></div>
  </div>
</template>
<style scoped>
  .headBox {
    width: 370px;
    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background,
  .icon {
    border-radius: 50%;
    /* 使背景图片按比例缩放，覆盖整个元素 */
    background-size: cover;
    transition: transform var(--element-hover-transition-time), background-image var(--element-hover-transition-time);
    cursor: pointer;
  }

  .background {
    width: 335px;
    height: 335px;
    background-image: url(../../public/headIcon/background1.jpg);
  }

  .icon {
    position: absolute; /* 设置为绝对定位 */
    width: 370px;
    height: 370px;
    background-image: url(../../public/headIcon/icon1.png);
  }

  @media screen and (min-width: 834px) {
    .icon:hover {
      transform: scale(1.05);
    }

    .icon:active {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 833px) {
    .headBox {
      width: 300px;
      height: 300px;
    }

    .background {
      width: 270px;
      height: 270px;
    }

    .icon {
      width: 300px;
      height: 300px;
    }

    .icon:active {
      transform: scale(0.95);
    }
  }
</style>
