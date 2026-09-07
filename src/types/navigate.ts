export type NavigateItem = {
  createdAt: string
  groupId: number
  id: number
  introduction: string
  link: string
  name: string
  needProxy: boolean
  visible: boolean
}

export type NavigateGroup = {
  createdAt: string
  icon: string
  id: number
  name: string
  groupItems: NavigateItem[]
}
