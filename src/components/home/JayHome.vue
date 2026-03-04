<script setup lang="ts">
  import type { ThemeMode, BackgroundMode } from '../../stores'

  import homeTheme from '../../theme/home.json'

  import JayBackground from '../../containers/JayBackground.vue'
  import JayAvatar from '../../containers/JayAvatar.vue'

  const props = withDefaults(
    defineProps<{
      isDark?: boolean
      isMobile?: boolean
      setThemeMode?: (mode: ThemeMode) => void
      setBackgroundMode?: (mode: BackgroundMode) => void
    }>(),
    {
      isDark: false,
      isMobile: false,
      setThemeMode: () => {},
      setBackgroundMode: () => {}
    }
  )
</script>
<template>
  <div>
    <jay-background />
    <n-config-provider v-if="!props.isMobile" :theme-overrides="props.isDark ? homeTheme.dark.desktop : homeTheme.light.desktop">
      <div class="!relative max-w-7xl m-auto flex gap-4 pl-4 pr-4">
        <div class="w-xs h-screen sticky top-4 flex flex-col gap-4 overflow-scroll"></div>
        <div class="flex-1"></div>
      </div>
    </n-config-provider>
    <n-config-provider v-else :theme-overrides="props.isDark ? homeTheme.dark.mobile : homeTheme.light.mobile"> </n-config-provider>
    <div id="show-background" class="h-screen invisible"></div>
  </div>
</template>
