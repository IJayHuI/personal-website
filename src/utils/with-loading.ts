import { useGeneralStore } from '../stores'

/**
 * 带 loading 状态的异步执行包装器
 *
 * 统一处理 fetch action 里的 loading 计数 + 错误捕获，避免每个 action 重复写
 * try/catch/finally + startLoading/stopLoading 样板代码。
 *
 * @param fn 实际执行业务逻辑的异步函数
 * @returns fn 的返回值，出错时返回 undefined（错误已 console.error）
 */
export async function withLoading<T>(fn: () => Promise<T>): Promise<T | undefined> {
  const general = useGeneralStore()
  general.startLoading()
  try {
    return await fn()
  } catch (e) {
    console.error(e)
  } finally {
    general.stopLoading()
  }
}
