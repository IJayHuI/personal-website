import { supabase } from './supabase'

import { type MenuOption, NIcon } from 'naive-ui'
import { h, type Component } from 'vue'
import * as icons from '@vicons/material'
import PinyinMatch from 'pinyin-match'

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

export const search = (datas: NavigateGroup[], keyword: string) => {
  const groupIds = new Set<number>()
  const items = new Set<number>()
  // keyword 为空 → 返回所有
  if (!keyword) {
    for (const group of datas) {
      groupIds.add(group.id)
      for (const item of group.groupItems) items.add(item.id)
    }
    return {
      groupIds: Array.from(groupIds),
      items: Array.from(items)
    }
  }
  for (const group of datas) {
    const groupMatch = PinyinMatch.match(group.name, keyword) || PinyinMatch.match(group.icon, keyword)
    if (groupMatch) groupIds.add(group.id)

    for (const item of group.groupItems) {
      const itemMatch = PinyinMatch.match(item.name, keyword) || PinyinMatch.match(item.link, keyword) || PinyinMatch.match(item.introduction, keyword)
      if (itemMatch) {
        groupIds.add(group.id)
        items.add(item.id)
      }
    }
  }
  return {
    groupIds: Array.from(groupIds),
    items: Array.from(items)
  }
}
