import { ref } from 'vue'
import axios from 'axios'
import * as icons from '@vicons/material'
import { baseUrl, loadingStatus } from '@/main'

export const expandedNames = ref([])
export const datas = ref([])
export const drawerStatus = ref(false)
export const drawerData = ref({
  active: false,
  title: '',
  content: '',
  link: ''
})

// Navigate 主题设置
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
      setTimeout(() => {
        loadingStatus.value = false
      }, 500)
    })
    .catch((error) => {
      console.error(error)
    })
}
