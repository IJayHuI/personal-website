<script setup>
  import { contactInfos, handleClickOrHoverContactIcon, contactShowInfo } from '@/services/Home'
</script>
<template>
  <n-card class="interaction" size="huge" @toushstart="">
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
      <div style="display: flex; gap: 15px">
        <n-button text v-for="item in contactInfos" :key="item.id" @click="handleClickOrHoverContactIcon(item)">
          <n-icon size="35">
            <div v-html="item.icon"></div>
          </n-icon>
        </n-button>
      </div>
      <n-button text tag="a" :href="contactShowInfo.link" target="_blank">
        <div style="text-align: right">
          <p>{{ contactShowInfo.text }}</p>
          <p>{{ contactShowInfo.mobileText }}</p>
        </div>
      </n-button>
    </div>
  </n-card>
</template>
