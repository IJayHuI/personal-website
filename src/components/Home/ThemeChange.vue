<script setup>
  import { AutoAwesomeRound } from '@vicons/material'
  import { NRadioGroup, NRadioButton } from 'naive-ui'
  import { ref } from 'vue'
  import { themeMode } from '../../main'

  const buttons = ref([
    {
      value: 'dark',
      label: '暗色'
    },
    {
      value: 'auto',
      label: '跟随系统'
    },
    {
      value: 'light',
      label: '亮色'
    }
  ])
</script>
<template>
  <n-card class="interaction" size="huge" @toushstart="">
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px">
      <n-icon size="40"><AutoAwesomeRound /></n-icon>
      <n-radio-group v-model:value="themeMode" size="large">
        <n-radio-button v-for="button in buttons" :key="button.value" :value="button.value" :label="button.label" />
      </n-radio-group>
    </div>
  </n-card>
</template>
