<script setup lang="ts">
import { AutoAwesomeRound, AutorenewRound } from '@vicons/material'
import type { BackgroundMode } from '../../types/theme'
import { useHomeStore } from '../../stores'

const home = useHomeStore()

const setBackgroundMode = (mode: BackgroundMode) => {
  home.setBackgroundMode(mode)
  home.fetchBackground(mode)
}
const randomBackground = () => home.fetchBackground('local')
</script>
<template>
  <n-card v-interaction size="medium" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><auto-awesome-round /></n-icon>
    <div class="flex gap-2">
      <n-button :class="home.backgroundMode === 'bing' ? '!outline' : ''" @click="setBackgroundMode('bing')" secondary round>bing壁纸</n-button>
      <n-button :class="home.backgroundMode === 'local' ? '!outline' : ''" @click="setBackgroundMode('local')" secondary round>系统壁纸</n-button>
    </div>
    <n-button v-if="home.backgroundMode === 'local'" @click="randomBackground()" quaternary circle size="large">
      <template #icon>
        <n-icon size="25"><autorenew-round /></n-icon>
      </template>
    </n-button>
  </n-card>
</template>
