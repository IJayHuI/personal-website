/**
 * 预加载图片：等图片本体下载完毕后再 resolve
 *
 * 用于 fetch action 内，确保 loading 退出动画不会在图片还在下载时触发
 *
 * @param url 图片地址
 * @param timeout 超时时间（ms），超时后 resolve 不阻塞流程
 */
export function preloadImage(url: string, timeout = 10000): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve() // 加载失败也 resolve，不阻塞流程
    img.src = url
    // 超时兜底，避免图片太慢一直卡住 loading
    setTimeout(resolve, timeout)
  })
}

/**
 * 批量预加载图片
 */
export function preloadImages(urls: string[], timeout = 10000): Promise<void[]> {
  return Promise.all(urls.map((url) => preloadImage(url, timeout)))
}
