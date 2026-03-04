export * from './general'
export * from './home'
export * from './navigate'
export * from './project'

import { useGeneralStore } from './general'
import { useHomeStore } from './home'
import { useNavigateStore } from './navigate'
import { useProjectStore } from './project'

export type Stores = ReturnType<typeof useStores>

export function useStores() {
  return {
    general: useGeneralStore(),
    home: useHomeStore(),
    navigate: useNavigateStore(),
    project: useProjectStore()
  }
}
