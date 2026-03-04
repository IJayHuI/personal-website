<script setup lang="ts">
  import { zhCN, dateZhCN, darkTheme } from 'naive-ui'

  import themeOverrides from './theme/general.json'

  import JayGui from './containers/JayGui.vue'

  import { useStores } from './stores'

  const { general } = useStores()
</script>

<template>
  <n-config-provider :theme="general.isDark ? darkTheme : null" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <jay-gui />
    </n-message-provider>
  </n-config-provider>
</template>
