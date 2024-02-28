<template>
  <main class="w-full h-screen">
    <NtConfigProvide>
      <RouterView />
    </NtConfigProvide>
  </main>
</template>
<script setup lang="ts">

const theme = localStorage.getItem('theme')
if (theme === 'light') {

  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light')
} else {
  document.documentElement.classList.remove('light')
  document.documentElement.classList.add('dark')
}
</script>

