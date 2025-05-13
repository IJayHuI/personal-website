<script setup>
  import { ref } from 'vue'
  import { screenWidth } from '../main'
  import { group } from '../pinia'
  import axios from 'axios'

  import Button from 'primevue/button'
  import Menu from 'primevue/menu'
  import SelectButton from 'primevue/selectbutton'
  import Drawer from 'primevue/drawer'
  import Fieldset from 'primevue/fieldset'

  const systemTheme = matchMedia('(prefers-color-scheme: dark)')
  const element = document.querySelector('html')
  const options = ref(['浅色', '跟随系统', '深色'])
  const option = ref(options.value[1])
  const drawer = ref(false)
  const groupNames = ref([
    { label: '全部折叠', icon: 'pi pi-align-justify', command: () => selectedGroup(-1) },
    { label: '全部展开', icon: 'pi pi-align-justify', command: () => selectedGroup(0) }
  ])
  const allGroups = ref([])

  const selectedGroup = (value) => {
    group().index = []
    if (value == 0) group().index = allGroups.value
    if (value == -1) group().index = []
    else group().index.push(String(value))
  }

  axios.get('/api/navigate-groups?fields[0]=name&fields[1]=icon').then((response) => {
    response.data.data.forEach((group) => {
      groupNames.value.push({ label: group.name, icon: group.icon, command: () => selectedGroup(group.id) })
      allGroups.value.push(String(group.id))
    })
    group().index = allGroups.value
  })

  const items = ref([
    {
      label: '导航',
      items: [
        { label: '回主站', url: 'https://jayhu.site/', icon: 'pi pi-home' },
        { label: '小项目', url: 'https://project.jayhu.site/', icon: 'pi pi-inbox' }
      ]
    },
    {
      label: '分类',
      items: groupNames
    },
    { separator: true }
  ])

  const systemChange = () => {
    systemTheme.addEventListener('change', systemChange)
    if (systemTheme.matches) element.classList.add('dark-theme')
    else element.classList.remove('dark-theme')
  }

  const initiativeChange = (value) => {
    option.value = value
    if (value == '跟随系统') {
      systemTheme.addEventListener('change', systemChange)
      systemChange()
    } else {
      systemTheme.removeEventListener('change', systemChange)
      if (value == '深色') element.classList.add('dark-theme')
      else element.classList.remove('dark-theme')
    }
  }

  systemChange()
</script>
<template>
  <Menu class="menu" :model="items" v-if="screenWidth > 833">
    <template #start>
      <div class="start">
        <img class="icon" src="/icon.ico" alt="Logo" />
        <span class="title">导航</span>
      </div>
    </template>
    <template #end>
      <div class="end">
        <i class="pi pi-palette"></i>
        <span>主题</span>
        <SelectButton class="buttons" @change="initiativeChange(option)" v-model="option" :allowEmpty="false" :options="options" />
      </div>
    </template>
  </Menu>
  <Button v-else icon="pi pi-bars" label="菜单" class="button" severity="secondary" @click="drawer = true"></Button>
  <Drawer v-model:visible="drawer" position="bottom" style="height: 60%">
    <template #header><h1>菜单</h1></template>
    <Fieldset legend="分类">
      <template v-for="group in groupNames">
        <Button severity="secondary" :label="group.label" :icon="group.icon" @click="group.command"></Button>
      </template>
    </Fieldset>
    <Fieldset legend="导航">
      <Button class="navLink" href="https://jayhu.site/" as="a" severity="secondary">回主站</Button>
      <Button class="navLink" href="https://project.jayhu.site/" as="a" severity="secondary">项目页</Button>
    </Fieldset>
    <Fieldset legend="主题">
      <template v-for="option in options">
        <Button @click="initiativeChange(option)" severity="secondary">{{ option }}</Button>
      </template>
    </Fieldset>
  </Drawer>
</template>

<style scoped>
  .start,
  .end {
    height: 60px;
    display: flex;
    padding: 8px 12px;
    align-items: center;
    gap: 12px;
  }

  .title {
    font-size: 20px;
    font-weight: bolder;
  }

  .icon {
    width: 44px;
    height: 44px;
  }

  .button {
    width: calc(100% - 20px);
    height: 50px;
    margin: 10px;
    position: fixed;
    bottom: 0;
    z-index: 9;
  }

  .navLink {
    text-decoration: none;
  }
</style>

<style>
  .menu {
    width: 320px;
    position: fixed;
    max-height: calc(100% - 20px);
    margin: 10px;
  }

  .p-togglebutton-label {
    font-size: 15px;
  }

  .p-fieldset-content {
    display: flex;
    gap: 10px;
  }

  .p-fieldset-content {
    display: grid;
  }
</style>
