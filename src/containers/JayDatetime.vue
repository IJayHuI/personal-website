<script setup lang="ts">
  import JayDatetime from '../components/home/JayDatetime.vue'

  import { useStores } from '../stores'

  const { home } = useStores()
  let now = new Date()
  const props = withDefaults(
    defineProps<{
      dateTextSize?: string
      timeTextSize?: string
      dateTextAlign?: string
      timeTextAlign?: string
    }>(),
    {
      dateTextSize: 'text-xl',
      timeTextSize: 'text-5xl',
      dateTextAlign: 'text-left',
      timeTextAlign: 'text-left'
    }
  )

  home.setDatetime(now)
  setInterval(() => {
    now = new Date()
    home.setDatetime(now)
  }, 1000)
</script>

<template>
  <jay-datetime :datetime="home.datetime" :date-text-size="props.dateTextSize" :time-text-size="props.timeTextSize" :date-text-align="props.dateTextAlign" :time-text-align="props.timeTextAlign" />
</template>
