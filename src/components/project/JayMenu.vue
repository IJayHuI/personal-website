<script setup lang="ts">
  import type { MenuOption } from 'naive-ui'

  const props = withDefaults(
    defineProps<{
      options: MenuOption[]
    }>(),
    {
      options: () => []
    }
  )
</script>
<template>
  <n-menu :options="props.options" :collapsed-width="64" />
</template>
