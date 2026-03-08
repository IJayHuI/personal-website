<script setup lang="ts">
  import { useStores } from '../../stores'

  import JayMenu from '../../components/navigate/JayMenu.vue'

  const { general, navigate } = useStores()

  const updateExpandedCategory = (key: number | string) => {
    if (key === 'expandedAll') navigate.setExpandedCategory(navigate.navigateContent.map((group) => group.id))
    else if (key === 'closeAll') navigate.setExpandedCategory([])
    else navigate.setExpandedCategory([key as number])
  }
  const closeDrawer = () => {
    navigate.setMenuDrawerStatus(false)
  }
</script>

<template>
  <jay-menu :is-mobile="general.isMobile" :options="navigate.menuOptions" :status="navigate.menuDrawerStatus" :update-expanded-category="updateExpandedCategory" :close-drawer="closeDrawer" />
</template>
