<script setup lang="ts">
  import { onMounted, h } from 'vue'
  import { type MenuOption, NIcon } from 'naive-ui'
  import { RouterLink } from 'vue-router'
  import { HomeRound } from '@vicons/material'

  import JayProject from '../../components/project/JayProject.vue'

  import { getDatas } from '../../lib/project'

  import { useStores, type Project } from '../../stores'

  const { general, project } = useStores()
  const defaultMenuOptions: MenuOption[] = [
    {
      label: () => h(RouterLink, { to: { name: 'Home' } }, { default: () => '返回' }),
      key: 'back',
      icon: () => h(NIcon, null, { default: () => h(HomeRound) })
    }
  ]

  onMounted(async () => {
    if (!project.needGetDatas) return
    general.loadingEventAdd()
    await getDatas()
      .then((response: Project[]) => {
        project.setMenuOptions(defaultMenuOptions)
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
