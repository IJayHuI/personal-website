<script setup lang="ts">
  import JayContent from '../../components/project/JayContent.vue'

  import { useStores } from '../../stores'

  const { project } = useStores()
</script>
<template>
  <jay-content :datas="project.projectDatas" />
</template>
