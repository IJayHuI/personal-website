<script setup lang="ts">
  import { onBeforeMount } from 'vue'

  import JayLog from '../../components/home/JayLog.vue'

  import { getLogs } from '../../lib/log'

  import { useStores, type LogData } from '../../stores'

  const { general, home } = useStores()

  onBeforeMount(async () => {
    if (!home.needGetLogDatas) return
    general.loadingEventAdd()
    await getLogs()
      .then((response: LogData[]) => {
        home.setLogDatas(response)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        general.loadingEventSubtract()
        home.setNeedGetLogDatas(false)
      })
  })
</script>
<template>
  <jay-log :datas="home.logDatas" />
</template>
