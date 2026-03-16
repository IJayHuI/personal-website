<script setup lang="ts">
  import { onMounted } from 'vue'

  import JayProject from '../../components/project/JayProject.vue'

  import { getDatas } from '../../lib/project'

  import { useStores, type Project } from '../../stores'

  const { general, project } = useStores()

  onMounted(async () => {
    if (!project.needGetDatas) return
    general.loadingEventAdd()
    await getDatas()
      .then((response: Project[]) => {
        project.setProjectDatas(response)
      })
      .finally(() => {
        general.loadingEventSubtract()
        project.setNeedGetDatas(false)
      })
  })
</script>
<template>
  <jay-project :is-dark="general.isDark" :is-mobile="general.isMobile" />
</template>
