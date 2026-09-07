const LOCAL_BACKGROUND_COUNT = 10

export function getLocalBackgroundImage(): string {
  const index = Math.floor(Math.random() * LOCAL_BACKGROUND_COUNT) + 1
  return `/local-background/background${index}.jpg`
}
