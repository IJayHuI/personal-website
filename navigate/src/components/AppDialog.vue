<script setup>
  import { item } from '../pinia'

  import Card from 'primevue/card'
  import Button from 'primevue/button'
</script>
<template>
  <Card style="overflow: hidden">
    <template #content>
      <h3 v-if="item().content.introduction != null">简介：</h3>
      <p>{{ item().content.introduction }}</p>
      <h3 v-if="item().content.needProxy">警告：</h3>
      <p v-if="item().content.needProxy">Visit this web need some magic!</p>
    </template>
    <template #footer>
      <div class="links">
        <Button as="a" icon="pi pi-globe" label="前往网站" target="_blank" :href="item().content.link" rounded severity="secondary" class="link"></Button>
      </div>
    </template>
  </Card>
</template>
<style scoped>
  .links {
    display: flex;
    gap: 10px;
  }

  .link {
    height: 42px;
    display: flex;
    justify-content: flex-start;
    transition: width 0.3s;
    gap: 12px;
    text-decoration: none;
  }

  .label {
    flex-shrink: 0;
  }

  .p-card {
    box-shadow: none;
  }
</style>
