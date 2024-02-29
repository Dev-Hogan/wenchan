import { createGlobalState, useStorage, type RemovableRef } from '@vueuse/core'

export const useTest = createGlobalState(() => {
  const a: RemovableRef<number> = useStorage('test', 1)
  function setA() {
    a.value++
  }
  return {
    a,
    setA
  }
})
