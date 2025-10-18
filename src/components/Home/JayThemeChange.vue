<script setup>
  import { ContrastRound } from '@vicons/material'
  import { theme } from '@/services/Home'
</script>
<template>
  <n-card v-slide-in class="interaction" size="medium" @touchstart="" content-class="flex justify-center items-center gap-5">
    <n-icon size="40"><ContrastRound /></n-icon>
    <div class="flex gap-2">
      <n-button :class="button.value == theme.themeMode ? '!outline' : ''" @click="theme.themeMode = button.value" secondary round v-for="button in theme.buttons">{{ button.label }}</n-button>
    </div>
  </n-card>
</template>
