import { createGlobalState, useStorage, type RemovableRef } from '@vueuse/core'
import { ThemeMode } from '@/models'
export const useThemMode = createGlobalState(() => {
  const themeMode: RemovableRef<ThemeMode> = useStorage<ThemeMode>('theme', ThemeMode.light)
  function setThemeMode(mode: ThemeMode) {
    themeMode.value = mode
  }
  return {
    themeMode,
    setThemeMode
  }
})
