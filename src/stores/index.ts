/**
 * Pinia store 集中导出
 *
 * 设计原则：
 * - 只做命名导出（`export *`），不做 `useStores()` 聚合
 * - 组件按需 `import { useXxxStore } from '@/stores'`，避免一次性实例化所有 store
 * - 新增 store 时在此处追加一行 export
 *
 * 注：auth store 将在阶段 2 任务 7 创建后追加导出
 */
export * from './general'
export * from './home'
export * from './navigate'
export * from './project'
export * from './blog'
export * from './auth'
