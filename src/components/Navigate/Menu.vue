<script setup>
  import { ref, h } from 'vue'
  import { NIcon } from 'naive-ui'
  import { ArrowBackRound, FolderRound } from '@vicons/material'
  import { RouterLink } from 'vue-router'

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
      label: () => h(RouterLink, { to: { name: 'Home' } }, { default: () => '返回' }),
      key: 'back',
      icon: () => h(NIcon, null, { default: () => h(ArrowBackRound) })
    },
    {
      label: () => h(RouterLink, { to: { name: 'Project' } }, { default: () => '小项目' }),
      key: 'project',
      icon: () => h(NIcon, null, { default: () => h(FolderRound) })
    }
  ])

  const handleUpdateExpandedNames = (keys) => {
    emit('update:expandedNames', [keys])
  }
</script>

<template>
  <n-menu :options="baseOptions" :collapsed-width="60"></n-menu>
  <n-menu :options="options" :collapsed-width="60" @update:value="handleUpdateExpandedNames"></n-menu>
</template>
