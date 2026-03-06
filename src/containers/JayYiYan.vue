<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useMessage } from 'naive-ui'

  import JayYiYan from '../components/home/JayYiYan.vue'

  import { getYiYan } from '../lib/yi-yan'

  import { useStores, type YiYanData } from '../stores'

  const { general, home } = useStores()
  const message = useMessage()

  onBeforeMount(async () => {
    general.loadingEventAdd()
    getYiYan()
      .then((response: YiYanData) => {
        home.setHitokoto(response.hitokoto)
        home.setFrom(response.from)
      })
      .catch(() => {
        message.error('获取一言失败')
      })
      .finally(() => {
        general.loadingEventSubtract()
        home.setNeedGetHitokoto(false)
      })
  })
</script>
<template>
  <jay-yi-yan :hitokoto="home.hitokoto" :from="home.from" />
</template>
