import { useLocalStorage, type RemovableRef } from '@vueuse/core'
export const sidebarWidth = useLocalStorage<number>('sidebarWidth', 255)
