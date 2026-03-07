const MOBILE_WIDTH = 768

export function isMobile(): boolean {
  return window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches
}
