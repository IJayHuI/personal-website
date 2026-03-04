<script setup lang="ts">
  import type { ThemeMode } from '../../stores'

  import type { BackgroundMode } from '../../stores'

  import JayBackground from '../../containers/JayBackground.vue'

  const props = withDefaults(
    defineProps<{
      isMobile?: boolean
      setThemeMode?: (mode: ThemeMode) => void
      setBackgroundMode?: (mode: BackgroundMode) => void
    }>(),
    {
      isMobile: false,
      setThemeMode: () => {},
      setBackgroundMode: () => {}
    }
  )
</script>
<template>
  <div>
    <jay-background />
    <div v-if="!props.isMobile"></div>
    <div v-else></div>
  </div>
</template>
