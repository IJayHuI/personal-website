import PinyinMatch from 'pinyin-match'
import type { NavigateGroup } from '../types/navigate'

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
    for (const item of group.groupItems) {
      const itemMatch =
        PinyinMatch.match(item.name, keyword) ||
        PinyinMatch.match(item.link, keyword) ||
        PinyinMatch.match(item.introduction, keyword)
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
