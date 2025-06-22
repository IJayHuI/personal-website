<script setup>
  import { contactInfos, handleClickOrHoverContactIcon, contactShowInfo } from '@/services/Home'
</script>
<template>
  <n-card class="interaction" @touchstart="">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px">
      <div style="display: flex; gap: 15px">
        <n-button text tag="a" :href="contactShowInfo.link" target="_blank" v-for="item in contactInfos" @mouseenter="handleClickOrHoverContactIcon(item)" @mouseleave="handleClickOrHoverContactIcon('null')">
          <n-icon size="37">
            <div v-html="item.icon"></div>
          </n-icon>
        </n-button>
      </div>
      <p>{{ contactShowInfo.text }} · {{ contactShowInfo.mobileText }}</p>
    </div>
  </n-card>
</template>
