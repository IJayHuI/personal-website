<script setup lang="ts">
  import JayMenu from '../../components/project/JayMenu.vue'

  import { useStores } from '../../stores'

  const { project } = useStores()
</script>
<template>
  <jay-menu :options="project.menuOptions" />
</template>
