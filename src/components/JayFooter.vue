<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      appVersion?: string
    }>(),
    {
      appVersion: ''
    }
  )
</script>
<template>
  <span>&copy; 2024-2026 JayHu.</span>
  <span><a class="hover:underline" target="_blank" href="https://beian.miit.gov.cn">浙ICP备2024102465号</a></span>
  <span>Version: {{ appVersion }}</span>
</template>
