<script setup>
  import { contactInfos, handleClickMobileContactIcon, contactShowInfo } from '../../../services/Home'
</script>
<template>
  <n-card class="interaction" @toushstart="">
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
      <div style="display: flex; gap: 15px">
        <n-button text tag="a" :href="contactShowInfo.link" target="_blank" v-for="item in contactInfos" :key="item.id" @mouseenter="handleClickMobileContactIcon(item)">
          <n-icon size="35">
            <div v-html="item.icon"></div>
          </n-icon>
        </n-button>
      </div>
      <p>{{ contactShowInfo.text }} · {{ contactShowInfo.mobileText }}</p>
    </div>
  </n-card>
</template>
