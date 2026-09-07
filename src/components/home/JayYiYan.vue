<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useHomeStore } from '../../stores'

const home = useHomeStore()

const props = withDefaults(
  defineProps<{
    hitokotoSize?: string
    fromSize?: string
  }>(),
  {
    hitokotoSize: 'text-xl',
    fromSize: 'text-base'
  }
)

onBeforeMount(() => {
  home.fetchYiYan()
})
</script>
<template>
  <p :class="props.hitokotoSize">{{ home.hitokoto }}</p>
  <p :class="`text-end ${props.fromSize}`">- {{ home.from }}</p>
</template>
