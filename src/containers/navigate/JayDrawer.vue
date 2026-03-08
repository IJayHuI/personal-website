<script setup lang="ts">
  import JayDrawer from '../../components/navigate/JayDrawer.vue'

  import { useStores } from '../../stores'

  import { copyLink } from '../../lib/navigate'

  const { navigate } = useStores()

  const closeDrawer = () => {
    navigate.setContentDrawerStatus(false)
  }

  const props = withDefaults(
    defineProps<{
      placement?: string
      size?: string
    }>(),
    {
      placement: 'right',
      size: '40%'
    }
  )
</script>

<template>
  <jay-drawer :close-drawer="closeDrawer" :copy-link="copyLink" :item="navigate.drawerItem" :group="navigate.drawerGroup" :status="navigate.contentDrawerStatus" :placement="props.placement" :size="props.size" />
</template>
