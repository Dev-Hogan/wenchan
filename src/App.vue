<template>
  <main class="w-full h-screen relative">
    <NtConfigProvide>
      <RouterView />
    </NtConfigProvide>
    <div @click="geDevTool"
      class="absolute bottom-12 right-12 border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
      {{ isDev ? 'dev' : 'home' }}</div>
  </main>
</template>
<script setup lang="ts">
import router from '@/router';
import { Routes } from '@/models'
const theme = localStorage.getItem('theme')
if (theme === 'light') {
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light')
} else {
  document.documentElement.classList.remove('light')
  document.documentElement.classList.add('dark')
}

const isDev = ref(false)
function geDevTool() {
  const currentRouter = router.currentRoute.value.name
  if (currentRouter !== Routes.dev) {
    isDev.value = false
    router.push({ name: Routes.dev })
  } else {
    isDev.value = true
    router.push({ name: Routes.home })
  }
}
</script>

