import { supabase } from './supabase'
import type { MenuOption } from 'naive-ui'
import * as icons from '@vicons/material'
import { renderIcon } from '../utils/render-icon'
import type { NavigateGroup } from '../types/navigate'

export async function getNavigateDatas() {
  const { data, error } = await supabase
    .from('navigate_groups')
    .select('*, navigate_items(*)')
  if (error) throw error
  return {
    menuOptions: data.map((item) => ({
      label: item.name,
      key: item.id,
      icon: renderIcon(icons[item.icon as keyof typeof icons])
    })) as MenuOption[],
    navigateContent: data.map(
      (group) =>
        ({
          createdAt: group.created_at,
          icon: group.icon,
          id: group.id,
          name: group.name,
          groupItems: group.navigate_items.map((item: any) => ({
            createdAt: item.created_at,
            groupId: item.group_id,
            id: item.id,
            introduction: item.introduction,
            link: item.link,
            name: item.name,
            needProxy: item.need_proxy,
            visible: item.visible
          }))
        }) as NavigateGroup
    )
  }
}
