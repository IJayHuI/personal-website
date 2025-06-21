import { NIcon } from 'naive-ui'
import { ref, h } from 'vue'
import axios from 'axios'
import * as icons from '@vicons/material'
import { baseUrl } from '@/main'

export const expandedNames = ref([])
export const datas = ref([])
export const drawerStatus = ref(false)
export const loadingStatus = ref(false)
export const drawerData = ref({
  active: false,
  title: '',
  content: '',
  link: ''
})

export const darkThemeOverrides = {
  mobile: {
    Button: {
      color: 'rgb(16, 16, 20)',
      colorHover: 'rgb(16, 16, 20)',
      colorPressed: 'rgb(16, 16, 20)',
      colorFocus: 'rgb(16, 16, 20)'
    }
  }
}

export const lightThemeOverrides = {
  mobile: {
    Button: {
      color: 'rgb(255, 255, 255)',
      colorHover: 'rgb(255, 255, 255)',
      colorPressed: 'rgb(255, 255, 255)',
      colorFocus: 'rgb(255, 255, 255)'
    }
  }
}

const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const menuOptions = ref([
  {
    label: '关闭所有',
    key: 'closeAll',
    icon: renderIcon(icons['CloseFullscreenRound'])
  },
  {
    label: '展开所有',
    icon: renderIcon(icons['FormatListBulletedRound']),
    key: 'expandedAll',
    onClick: () => {
      datas.value.map((item) => {
        expandedNames.value.push(item.documentId)
      })
    }
  }
])

export const getData = () => {
  loadingStatus.value = true
  axios
    .get(`${baseUrl.server}/navigate-groups?populate=item`)
    .then((response) => {
      datas.value = response.data.data
      datas.value.map((item) => {
        menuOptions.value.push({
          label: item.name,
          key: item.documentId,
          icon: renderIcon(icons[item.icon])
        })
        expandedNames.value.push(item.documentId)
      })
      loadingStatus.value = false
    })
    .catch((error) => {
      console.error(error)
    })
}
