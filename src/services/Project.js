import { ref, h } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { loading, supabase } from '@/main'
import { HomeRound } from '@vicons/material'

export const datas = ref({
  needGetDatas: true,
  data: []
})
export const menuOptions = ref([
  {
    label: () => h(RouterLink, { to: { name: 'Home' } }, { default: () => '返回' }),
    key: 'back',
    icon: () => h(NIcon, null, { default: () => h(HomeRound) })
  }
])

export const themeOverrides = {
  light: {
    mobile: {
      Button: {
        color: 'white',
        colorHover: 'white',
        colorPressed: 'white',
        colorFocus: 'white'
      }
    }
  },
  dark: {
    mobile: {
      Button: {
        color: 'rgb(16, 16, 20)',
        colorHover: 'rgb(16, 16, 20)',
        colorPressed: 'rgb(16, 16, 20)',
        colorFocus: 'rgb(16, 16, 20)'
      }
    }
  }
}

export const getData = async () => {
  if (!datas.value.needGetDatas) return
  loading.value.projectCount++
  const { data, error } = await supabase.from('projects').select('*')
  if (error) console.error(error)
  else {
    datas.value.data = data
    datas.value.needGetDatas = false
  }
  loading.value.projectCount--
}
