const MOBILE_WIDTH = 768

export function isMobile(width: number = window.innerWidth): boolean {
  return width < MOBILE_WIDTH
}
