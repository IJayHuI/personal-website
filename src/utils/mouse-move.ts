export const calculateMouseMove = (e: MouseEvent, strength: number = 20) => {
  const { innerWidth, innerHeight } = window
  return {
    targetX: (e.clientX / innerWidth - 0.5) * 2 * strength,
    targetY: (e.clientY / innerHeight - 0.5) * 2 * strength
  }
}
