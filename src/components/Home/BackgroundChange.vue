<script setup>
  import { ref } from 'vue'
  import { getBackground } from '@/services/Home'
  import { NRadioGroup, NRadioButton } from 'naive-ui'
  import { AutoAwesomeRound } from '@vicons/material'
  import { loadingStatus } from '@/main'
  import { useMessage } from 'naive-ui'

  const message = useMessage()
  const type = ref(localStorage.getItem('background-type'))
  const buttons = ref([
    {
      value: 'bing',
      label: 'Bing 壁纸'
    },
    {
      value: 'local',
      label: '站内壁纸'
    },
    {
      value: 'acg',
      label: '二次元壁纸'
    }
  ])

  const backgroundChange = () => {
    loadingStatus.value = true
    localStorage.setItem('background-type', type.value)
    getBackground(localStorage.getItem('background-type'))
      .then((response) => {
        message.success(response)
      })
      .catch((error) => {
        message.error('切换失败')
      })
      .finally(() => {
        loadingStatus.value = false
      })
  }
</script>
<template>
  <n-card class="interaction" size="huge" @toushstart="">
    <div style="display: flex; justify-content: center; align-items: center; gap: 20px">
      <n-icon size="40"><AutoAwesomeRound /></n-icon>
      <n-radio-group v-model:value="type" @update:value="backgroundChange">
        <n-radio-button v-for="button in buttons" :key="button.value" :value="button.value" :label="button.label" />
      </n-radio-group>
    </div>
  </n-card>
</template>
