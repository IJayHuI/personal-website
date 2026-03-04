<script setup lang="ts">
  import JaySite from '../components/home/JaySite.vue'

  import homeConfig from '../configs/home.json'

  const props = withDefaults(
    defineProps<{
      cardSize?: string
      iconSize?: number
      direction?: string
      textClass?: string
    }>(),
    {
      cardSize: 'medium',
      iconSize: 35,
      direction: 'row',
      textClass: 'text-xl font-bold'
    }
  )
</script>
<template>
  <jay-site :sites="homeConfig.sites" :card-size="props.cardSize" :icon-size="props.iconSize" :direction="props.direction" :text-class="props.textClass" />
</template>
