<template>
  <main class="w-full h-screen relative">
    <NtConfigProvide>
      <RouterView />
    </NtConfigProvide>
    <div @click="geDevTool"
      class="absolute bottom-12 right-12 border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
      {{ isDev ? 'dev' : 'all' }}</div>
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

const isDev = ref(false)
function geDevTool() {
  const currentRouter = router.currentRoute.value.name
  if (currentRouter !== Routes.dev) {
    isDev.value = false
    router.push({ name: Routes.dev })
  } else {
    isDev.value = true
    router.push({ name: Routes.all })
  }
}
</script>

