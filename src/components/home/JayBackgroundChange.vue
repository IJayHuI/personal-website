<script setup lang="ts">
  import { AutoAwesomeRound, AutorenewRound } from '@vicons/material'

  import type { BackgroundMode } from '../../stores'

  const props = withDefaults(
    defineProps<{
      backgroundMode?: BackgroundMode
      setBackgroundMode?: (mode: BackgroundMode) => void
      randomBackground?: () => void
    }>(),
    {
      backgroundMode: 'bing',
      setBackgroundMode: () => {},
      randomBackground: () => {}
    }
  )
</script>
<template>
  <n-card class="interaction" size="medium" @touchstart="" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><auto-awesome-round /></n-icon>
    <div class="flex gap-2">
      <n-button :class="props.backgroundMode === 'bing' ? '!outline' : ''" @click="props.setBackgroundMode('bing')" secondary round>bing壁纸</n-button>
      <n-button :class="props.backgroundMode === 'local' ? '!outline' : ''" @click="props.setBackgroundMode('local')" secondary round>系统壁纸</n-button>
    </div>
    <n-button v-if="props.backgroundMode === 'local'" @click="props.randomBackground()" quaternary circle size="large">
      <template #icon>
        <n-icon size="25"><autorenew-round /></n-icon>
      </template>
    </n-button>
  </n-card>
</template>
