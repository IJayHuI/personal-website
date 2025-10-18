<script setup>
  import { contactMe, background } from '@/services/Home'
</script>
<template>
  <n-button tag="a" :href="item.link" target="_blank" class="overflow-hidden !transition-[max-width] !duration-1000 !max-w-19.75 hover:!max-w-xl ease-in-out" :class="`!text-${background.fontColor}`" size="large" round v-for="item in contactMe" secondary>
    <div class="flex items-center gap-6">
      <n-icon size="35">
        <div v-html="item.icon"></div>
      </n-icon>
      <p>
        {{ item.text }}
      </p>
    </div>
  </n-button>
</template>
