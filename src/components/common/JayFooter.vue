<script setup lang="ts">
/**
 * 页脚
 * 展示版权信息和版本号
 */
defineProps<{ appVersion: string }>()
</script>
<template>
  <span>&copy; 2024-2026 JayHu.</span>
  <span><a v-magnetic class="hover:underline" target="_blank" href="https://beian.miit.gov.cn">浙ICP备2024102465号</a></span>
  <span>版本: {{ appVersion }}</span>
</template>
