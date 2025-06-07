<script setup>
  import { contactInfos, handleClickOrHoverContactIcon, contactShowInfo } from '../../../services/Home'
</script>
<template>
  <n-card class="interaction" @toushstart="">
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
      <div style="display: flex; gap: 15px">
        <n-button text tag="a" :href="contactShowInfo.link" target="_blank" v-for="item in contactInfos" @mouseenter="handleClickOrHoverContactIcon(item)" @mouseleave="handleClickOrHoverContactIcon('null')">
          <n-icon size="37">
            <div v-html="item.icon"></div>
          </n-icon>
        </n-button>
      </div>
      <div style="text-align: right; height: 50px">
        <p>{{ contactShowInfo.text }}</p>
        <p>{{ contactShowInfo.mobileText }}</p>
      </div>
    </div>
  </n-card>
</template>
