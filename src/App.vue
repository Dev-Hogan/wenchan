<template>
  <main class="w-full h-screen relative">
    <NtConfigProvide>
      <RouterView />
    </NtConfigProvide>
    <div @click="geDevTool"
      class="absolute bottom-12 right-12 border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
      dev </div>
  </main>
</template>
<script setup lang="ts">
import router from '@/router';
import { Routes, ThemeMode } from '@/models'
import { THEME_KEY } from '@/const';
const theme = localStorage.getItem(THEME_KEY) || ThemeMode.light
if (theme === ThemeMode.light) {
  document.documentElement.classList.remove(ThemeMode.dark)
  document.documentElement.classList.add(ThemeMode.light)
} else {
  document.documentElement.classList.remove(ThemeMode.light)
  document.documentElement.classList.add(ThemeMode.dark)
}

function geDevTool() {
  const currentRouter = router.currentRoute.value.name
  if (currentRouter !== Routes.dev) {
    router.push({ name: Routes.dev })
  } else {
   console.warn('Already in dev page')
  }
}
</script>

