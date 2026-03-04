<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      datetime?: Date
      dateTextSize?: string
      timeTextSize?: string
      dateTextAlign?: string
      timeTextAlign?: string
    }>(),
    {
      datetime: () => new Date(),
      dateTextSize: 'text-xl',
      timeTextSize: 'text-5xl',
      dateTextAlign: 'text-left',
      timeTextAlign: 'text-left'
    }
  )
</script>
<template>
  <div>
    <p :class="`${props.dateTextAlign} ${props.dateTextSize}`">{{ props.datetime.getFullYear() }}年 {{ props.datetime.getMonth() + 1 }}月 {{ props.datetime.getDate() }}日</p>
    <p :class="`${props.dateTextAlign} ${props.dateTextSize}`">
      星期{{
        props.datetime.getDay() === 0 ? '日' : props.datetime.getDay() === 1 ? '一' : props.datetime.getDay() === 2 ? '二' : props.datetime.getDay() === 3 ? '三' : props.datetime.getDay() === 4 ? '四' : props.datetime.getDay() === 5 ? '五' : '六'
      }}
    </p>
  </div>
  <p :class="`${props.timeTextAlign} ${props.timeTextSize}`">{{ props.datetime.getHours().toString().padStart(2, '0') }}:{{ props.datetime.getMinutes().toString().padStart(2, '0') }}:{{ props.datetime.getSeconds().toString().padStart(2, '0') }}</p>
</template>
