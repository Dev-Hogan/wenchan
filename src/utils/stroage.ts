import { useSessionStorage, type RemovableRef } from '@vueuse/core'

export function useNumberSessionRef(key: string, val?: number): RemovableRef<number | undefined> {
  return useSessionStorage<number | undefined>(key, val, {
    serializer: {
      read: (raw) => {
        return raw ? +raw : undefined
      },
      write: (raw) => (raw ? raw + '' : '')
    }
  })
}
