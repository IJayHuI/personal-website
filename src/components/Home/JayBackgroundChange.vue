<script setup>
  import { getBackground, background } from '@/services/Home'
  import { useMessage } from 'naive-ui'
  import { AutoAwesomeRound, ReplayRound } from '@vicons/material'
  import { loadingStatus } from '@/main'

  const message = useMessage()
  const backgroundChange = (type = localStorage.getItem('background-type')) => {
    loadingStatus.value = true
    getBackground(type)
      .then((response) => {
        message.success(response)
      })
      .catch((error) => {
        message.error(error)
      })
      .finally(() => {
        loadingStatus.value = false
      })
  }
</script>
<template>
  <n-card v-slide-in class="interaction" size="medium" @touchstart="" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><AutoAwesomeRound /></n-icon>
    <div class="flex gap-2">
      <n-button :class="button.value == background.type ? '!outline' : ''" @click="backgroundChange(button.value)" secondary round v-for="button in background.buttons">{{ button.label }}</n-button>
    </div>
    <n-button text @click="backgroundChange()" v-if="background.type !== 'bing'">
      <n-icon size="40"><ReplayRound /></n-icon>
    </n-button>
  </n-card>
</template>
