<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      hitokoto: string
      from: string
      hitokotoSize?: string
      fromSize?: string
    }>(),
    {
      hitokoto: '',
      from: '',
      hitokotoSize: 'text-xl',
      fromSize: 'text-base'
    }
  )
</script>
<template>
  <p :class="props.hitokotoSize">{{ props.hitokoto }}</p>
  <p :class="`text-end ${props.fromSize}`">- {{ props.from }}</p>
</template>
