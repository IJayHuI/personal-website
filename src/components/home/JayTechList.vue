<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      techList: {
        href: string
        name: string
      }[]
    }>(),
    {
      techList: () => []
    }
  )
</script>

<template>
  <n-button round secondary size="small" v-for="item in props.techList" tag="a" :href="item.href" target="_blank">
    {{ item.name }}
  </n-button>
</template>
