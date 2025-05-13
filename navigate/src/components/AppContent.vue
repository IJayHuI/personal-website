<script setup>
  import { ref } from 'vue'
  import { screenWidth } from '../main'
  import { group, item } from '../pinia'
  import axios from 'axios'
  import AppFooter from './AppFooter.vue'
  import AppDialog from './AppDialog.vue'

  import Accordion from 'primevue/accordion'
  import AccordionPanel from 'primevue/accordionpanel'
  import AccordionHeader from 'primevue/accordionheader'
  import AccordionContent from 'primevue/accordioncontent'
  import DynamicDialog from 'primevue/dynamicdialog'
  import { useDialog } from 'primevue/usedialog'
  import Popover from 'primevue/popover'
  import Button from 'primevue/button'

  const datas = ref()
  axios.get('/api/navigate-groups?populate[item][fields][0]=name&populate[item][fields][1]=link&populate[item][fields][2]=needProxy&populate[item][fields][3]=visible&populate[item][fields][4]=introduction&fields[0]=name&fields[1]=icon').then((response) => {
    datas.value = response.data.data
  })

  const dialog = useDialog()
  const openDialog = (name, content) => {
    item().content = content
    dialog.open(AppDialog, {
      props: {
        header: name,
        modal: true,
        style: {
          maxWidth: screenWidth.value > 833 ? '50vw' : '100%',
          margin: '10px'
        }
      }
    })
  }
  const tips = ref()
  const mouseOver = (event) => {
    tips.value.show(event)
  }

  const mouseLeave = () => {
    tips.value.hide()
  }
</script>
<template>
  <div class="view">
    <div class="blank" v-if="screenWidth > 833"></div>
    <div class="container">
      <Accordion multiple :value="group().index">
        <template v-for="group in datas">
          <AccordionPanel :value="String(group.id)">
            <AccordionHeader>{{ group.name }}</AccordionHeader>
            <AccordionContent>
              <template v-for="item in group.item">
                <Button v-if="item.visible" severity="secondary" @click="openDialog(item.name, item)">
                  <span>{{ item.name }}</span>
                  <Button @click.stop @mouseover="mouseOver" @mouseleave="mouseLeave" icon="pi pi-globe" severity="secondary" class="link" target="_blank" as="a" :href="item.link" link></Button>
                </Button>
              </template>
            </AccordionContent>
          </AccordionPanel>
        </template>
      </Accordion>
      <app-footer />
    </div>
  </div>
  <Popover ref="tips"><span>直接前往</span></Popover>
  <DynamicDialog />
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
    grid-template-columns: 1fr;
    width: calc(100% - 336px);
    margin: 10px;
    gap: 10px;
  }

  .link {
    text-decoration: none;
    color: var(--p-button-secondary-hover-color);
  }

  @media screen and (max-width: 833px) {
    .container {
      grid-template-columns: 1fr;
      margin-bottom: 70px;
      width: 100%;
    }
  }
</style>

<style>
  .p-accordioncontent-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }
</style>
