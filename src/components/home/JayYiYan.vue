<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      hitokoto: string
      from: string
    }>(),
    {
      hitokoto: '',
      from: ''
    }
  )
</script>
<template>
  <p class="text-xl">{{ props.hitokoto }}</p>
  <p class="text-end">- {{ props.from }}</p>
</template>
