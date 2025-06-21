<script setup>
  import { ref, h } from 'vue'
  import { NIcon } from 'naive-ui'
  import { HomeRound, FolderRound } from '@vicons/material'
  import { RouterLink } from 'vue-router'
  import { drawerStatus } from '@/services/Navigate'

  const props = defineProps({
    options: {
      type: Object,
      required: true
    },
    expandedNames: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits(['update:expandedNames'])

  const baseOptions = ref([
    {
      label: () => h(RouterLink, { to: { name: 'Home' } }, { default: () => '主页' }),
      key: 'back',
      icon: () => h(NIcon, null, { default: () => h(HomeRound) })
    },
    {
      label: () => h(RouterLink, { to: { name: 'Project' } }, { default: () => '小项目' }),
      key: 'project',
      icon: () => h(NIcon, null, { default: () => h(FolderRound) })
    }
  ])

  const handleUpdateExpandedNames = (keys) => {
    drawerStatus.value = false
    emit('update:expandedNames', [keys])
  }
</script>

<template>
  <n-menu
    @update:value="
      () => {
        drawerStatus = false
      }
    "
    :options="baseOptions"></n-menu>
  <n-menu :options="options" @update:value="handleUpdateExpandedNames"></n-menu>
</template>
