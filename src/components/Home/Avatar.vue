<script setup>
  import { UTurnLeftRound } from '@vicons/material'
  import { headIconImgs, headIconClick, rotateStatus, headIconRotateClick, headIconInfo } from '@/services/Home'
</script>
<template>
  <div class="card interaction" @click="headIconClick" @touchstart="">
    <div class="front" :class="rotateStatus ? 'overturn-front' : ''">
      <div class="background" :style="headIconImgs.background"></div>
      <img class="icon" :src="headIconImgs.icon" />
    </div>
    <div class="back" :class="rotateStatus ? 'overturn-back' : ''" @click="headIconRotateClick">
      <div class="background" :style="headIconImgs.background"></div>
      <h2>{{ headIconInfo.text }}</h2>
    </div>
    <n-button @click.stop @click="rotateStatus = !rotateStatus" size="large" type="info" circle class="overturn-button interaction">
      <n-icon>
        <UTurnLeftRound />
      </n-icon>
    </n-button>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    width: 300px;
    height: 300px;
    perspective: 500px;
  }

  .front,
  .back,
  .background,
  .icon {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .front,
  .back {
    transition: transform 0.5s;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back h2 {
    font-size: x-large;
    z-index: 9;
  }

  .background {
    border-radius: 50%;
  }

  .overturn-button {
    z-index: 9;
    position: absolute;
    bottom: 24px;
    right: 24px;
  }

  .overturn-front {
    transform: rotateY(-180deg);
  }

  .overturn-back {
    transform: rotateY(0);
  }
</style>
