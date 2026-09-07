export type BingBackground = {
  src: string
  copyright: string
  title: string
}

// 壁纸获取结果：local 和 bing 互斥
export type GetBackgroundResult =
  | { mode: 'local'; img: string; message: string }
  | { mode: 'bing'; bing: BingBackground; message: string }

export type LogData = {
  id: number
  tagName: string
  name: string
  draft: boolean
  prerelease: boolean
  publishedAt: string
}

export type YiYanData = {
  hitokoto: string
  from: string
}

export type HeatmapData = {
  timestamp: number
  count: number
}

export type ContactItem = {
  link: string
  icon: string
  text: string
  mobileText: string
}
