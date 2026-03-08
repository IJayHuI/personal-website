<script setup lang="ts">
  import { onMounted, h } from 'vue'
  import { type MenuOption } from 'naive-ui'
  import * as icons from '@vicons/material'
  import { RouterLink } from 'vue-router'

  import JayNavigate from '../../components/navigate/JayNavigate.vue'

  import { useStores } from '../../stores'

  import { getDatas, renderIcon } from '../../lib/navigate'

  const { general, navigate } = useStores()
  const defaultMenuOptions: MenuOption[] = [
    {
      label: () => h(RouterLink, { to: { name: 'Home' } }, { default: () => '返回' }),
      key: 'back',
      icon: renderIcon(icons['HomeRound'])
    },
    {
      label: '关闭所有',
      key: 'closeAll',
      icon: renderIcon(icons['CloseFullscreenRound'])
    },
    {
      label: '展开所有',
      icon: renderIcon(icons['FormatListBulletedRound']),
      key: 'expandedAll'
    }
  ]

  const openMenuDrawer = () => {
    navigate.setMenuDrawerStatus(true)
  }

  onMounted(async () => {
    if (!navigate.needGetDatas) return
    general.loadingEventAdd()
    await getDatas()
      .then((response) => {
        navigate.setMenuOptions([...defaultMenuOptions, ...(response.menuOptions as MenuOption[])])
        navigate.setExpandedCategory(response.menuOptions.map((item) => item.key).filter((key): key is number => typeof key === 'number'))
        navigate.setNavigateContent(response.navigateContent)
      })
      .finally(() => {
        general.loadingEventSubtract()
        navigate.setNeedGetDatas(false)
      })
  })
</script>
<template>
  <jay-navigate :is-dark="general.isDark" :is-mobile="general.isMobile" :open-menu-drawer="openMenuDrawer" />
</template>
