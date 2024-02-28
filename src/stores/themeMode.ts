import { defineStore } from 'pinia'
import {
  useLocalStorage,
  type RemovableRef // 此处引入是为了解决pnpm使用useLocalStorage类型报错问题
} from '@vueuse/core'
import { getLocal } from '@/utils'
type ThemeMode = 'light' | 'dark'
export const useThemeModeStore = defineStore('themeMode', () => {
  const themeMode: RemovableRef<string> = useLocalStorage<ThemeMode>('theme', 'light')
  function setThemeMode(mode: ThemeMode) {
    themeMode.value = mode
  }
  return {
    themeMode,
    setThemeMode
  }
})
