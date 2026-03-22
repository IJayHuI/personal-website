<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useMessage } from 'naive-ui'

  import JayBackground from '../../components/home/JayBackground.vue'

  import { useStores } from '../../stores'

  import { getBackground, type GetBackgroundResult } from '../../lib/background'

  const { general, home } = useStores()
  const message = useMessage()

  onBeforeMount(() => {
    if (!home.needGetBackground) return
    general.loadingEventAdd()
    getBackground('bing')
      .then((response: GetBackgroundResult) => {
        home.setBingBackgroundSrc(response.img)

        if (home.backgroundMode === 'bing') {
          message.success(response.message)
          home.setBackgroundSrc(response.img)
          home.setBackgroundMode(response.mode)
        }

        home.setNeedGetBackground(false)
      })
      .finally(() => {
        general.loadingEventSubtract()
      })

    if (home.backgroundMode === 'local') {
      general.loadingEventAdd()
      getBackground('local')
        .then((response: GetBackgroundResult) => {
          message.success(response.message)
          home.setBackgroundSrc(response.img)
          home.setBackgroundMode(response.mode)
        })
        .finally(() => {
          general.loadingEventSubtract()
        })
    }
  })
</script>
<template>
  <jay-background :is-mobile="general.isMobile" :background-src="home.backgroundSrc" />
</template>
