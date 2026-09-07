import type { ThemeMode } from '../types/theme'

export function getSystemPrefersDark(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

export function getIsDark(mode: ThemeMode): boolean {
  const systemPrefersDark = getSystemPrefersDark()
  return mode === 'dark' ? true : mode === 'light' ? false : systemPrefersDark
}
