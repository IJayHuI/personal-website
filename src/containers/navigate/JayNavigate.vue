<script setup lang="ts">
  import { onMounted } from 'vue'
  import { type MenuOption } from 'naive-ui'
  import * as icons from '@vicons/material'

  import JayNavigate from '../../components/navigate/JayNavigate.vue'

  import { useStores } from '../../stores'

  import { getDatas, renderIcon, search } from '../../lib/navigate'

  const { general, navigate } = useStores()
  const defaultMenuOptions: MenuOption[] = [
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
  const updateValue = (v: string) => {
    navigate.setInputBox(v)
    const result = search(navigate.navigateContent, v)
    navigate.setExpandedCategory(result.groupIds)
    navigate.setHighlightItems(result.items)
  }

  onMounted(async () => {
    if (!navigate.needGetDatas) return
    general.loadingEventAdd()
    await getDatas()
      .then((response) => {
        navigate.setMenuOptions([...defaultMenuOptions, ...(response.menuOptions as MenuOption[])])
        navigate.setExpandedCategory(response.menuOptions.map((item) => item.key).filter((key): key is number => typeof key === 'number'))
        navigate.setNavigateContent(response.navigateContent)
        navigate.setHighlightItems(response.navigateContent.flatMap((group) => group.groupItems.map((item) => item.id)))
      })
      .finally(() => {
        general.loadingEventSubtract()
        navigate.setNeedGetDatas(false)
      })
  })
</script>
<template>
  <jay-navigate :is-dark="general.isDark" :is-mobile="general.isMobile" :input-value="navigate.inputBox" :update-value="updateValue" :open-menu-drawer="openMenuDrawer" />
</template>
