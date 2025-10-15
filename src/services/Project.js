import { ref, h } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { loadingStatus, supabase } from '@/main'
import { HomeRound, BookmarksRound } from '@vicons/material'

export const drawerStatus = ref(false)
export const datas = ref({
  needGetDatas: true,
  data: []
})
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

export const getData = async () => {
  if (!datas.value.needGetDatas) return
  loadingStatus.value = true
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.error(error)
  else {
    datas.value.data = data
    datas.value.needGetDatas = false
    loadingStatus.value = false
  }
}
