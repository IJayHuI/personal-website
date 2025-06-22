import { ref, h } from 'vue'
import axios from 'axios'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { baseUrl, loadingStatus } from '@/main'
import { HomeRound, BookmarksRound } from '@vicons/material'

export const drawerStatus = ref(false)
export const datas = ref([])
export const menuOptions = ref([
  {
    label: () => h(RouterLink, { to: { name: 'Home' } }, { default: () => '主页' }),
    key: 'back',
    icon: () => h(NIcon, null, { default: () => h(HomeRound) })
  },
  {
    label: () => h(RouterLink, { to: { name: 'Navigate' } }, { default: () => '导航页' }),
    key: 'project',
    icon: () => h(NIcon, null, { default: () => h(BookmarksRound) })
  }
])

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

export const getData = () => {
  loadingStatus.value = true
  axios
    .get(`${baseUrl.server}/projects?populate=image`)
    .then((response) => {
      datas.value = response.data.data
      setTimeout(() => {
        loadingStatus.value = false
      }, 500)
    })
    .catch((error) => {
      console.error(error)
    })
}
