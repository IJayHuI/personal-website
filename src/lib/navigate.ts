import { supabase } from './supabase'

import { type MenuOption, NIcon } from 'naive-ui'
import { h, type Component } from 'vue'
import * as icons from '@vicons/material'

import type { NavigateItem, NavigateGroup } from '../stores'

export const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const getDatas = async () => {
  const { data, error } = await supabase.from('navigate_groups').select('*, navigate_items(*)')
  if (error) throw error
  return {
    menuOptions: data.map((item) => {
      return {
        label: item.name,
        key: item.id,
        icon: renderIcon(icons[item.icon as keyof typeof icons])
      }
    }) as MenuOption[],
    navigateContent: data.map((group) => {
      return {
        createdAt: group.created_at,
        icon: group.icon,
        id: group.id,
        name: group.name,
        groupItems: group.navigate_items.map((item: any) => {
          return {
            createdAt: item.created_at,
            groupId: item.group_id,
            id: item.id,
            introduction: item.introduction,
            link: item.link,
            name: item.name,
            needProxy: item.need_proxy,
            visible: item.visible
          }
        }) as NavigateItem[]
      }
    }) as NavigateGroup[]
  }
}

export const copyLink = async (link: string | undefined) => {
  if (link === undefined) throw '未知内容'
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(link)
  } else {
    const input = document.createElement('input')
    input.value = link
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
  return '拷贝成功'
}
