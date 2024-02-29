import { createGlobalState, useStorage, type RemovableRef } from '@vueuse/core'
import { ThemeMode } from '@/models'
import { THEME_KEY } from '@/const'
export const useThemMode = createGlobalState(() => {
  const themeMode: RemovableRef<ThemeMode> = useStorage<ThemeMode>(THEME_KEY, ThemeMode.light)
  function setThemeMode(mode: ThemeMode) {
    themeMode.value = mode
  }
  return {
    themeMode,
    setThemeMode
  }
})
