<script setup>
  import { ref } from 'vue'
  import { screenWidth } from '../main'
  import axios from 'axios'
  import AppFooter from './AppFooter.vue'

  import Card from 'primevue/card'
  import Button from 'primevue/button'

  const projects = ref()
  axios.get('/api/projects?populate=image&fields[0]=name&fields[1]=compatibility&fields[2]=introduction&fields[3]=githubLink&fields[4]=webLink').then((response) => {
    projects.value = response.data.data
  })
</script>
<template>
  <div class="view">
    <div class="blank" v-if="screenWidth > 833"></div>
    <div class="container">
      <Card style="overflow: hidden" v-for="project in projects">
        <template #header>
          <img class="thumbnail" :src="'https://strapi.jayhu.site' + project.image[0].formats.small.url" />
        </template>
        <template #title>{{ project.name }}</template>
        <template #content>
          <h4>简介：</h4>
          <p>{{ project.introduction }}</p>
          <h4 style="margin-top: 5px">兼容性：</h4>
          <p>{{ project.compatibility }}</p>
        </template>
        <template #footer>
          <div class="links">
            <Button as="a" target="_blank" :href="project.githubLink" rounded severity="secondary" class="link"><i class="icon pi pi-github"></i><span class="label">前往 GitHub 仓库</span></Button>
            <Button as="a" target="_blank" :href="project.webLink" v-if="project.webLink != null" rounded severity="secondary" class="link"><i class="icon pi pi-link"></i><span class="label">前往已部署网站</span></Button>
          </div>
        </template>
      </Card>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<style scoped>
  .view {
    width: 100%;
    display: flex;
  }

  .blank {
    width: 336px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: calc(100% - 336px);
    margin: 10px;
    gap: 10px;
  }

  .thumbnail {
    width: 100%;
  }

  .p-card-title {
    font-size: 21px;
  }

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

  @media screen and (min-width: 834px) {
    .link {
      width: 42px;
    }

    .link:hover {
      width: 176px;
    }
  }

  @media screen and (max-width: 833px) {
    .container {
      grid-template-columns: 1fr;
      margin-bottom: 70px;
      width: 100%;
    }
  }
</style>
