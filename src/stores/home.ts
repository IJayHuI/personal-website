import { defineStore } from 'pinia'

/**
 * 首页状态 store
 *
 * 阶段 2：仅创建空壳
 * 阶段 3 将填充：
 *   - state: 壁纸 / 头像 / 日志 / 时间 / 一言 / 热力图 / 站点列表等
 *   - actions: 各字段的 setter + 拉取数据的 fetch actions（调 api 层）
 *   - 持久化: backgroundMode
 */
export const useHomeStore = defineStore('home', () => {
  return {}
})
