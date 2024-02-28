<template>
    <div>
        <div>开发工具</div>
        <button class="border" @click="toggleTheme">点击切换主题{{ themeMode }}</button>
    </div>
</template>

<script setup lang="ts">
import { useThemeModeStore } from '@/stores';
const themeModeStore = useThemeModeStore()
const themeMode = computed(() => themeModeStore.themeMode)
function toggleTheme() {
    if (themeMode.value === 'light') {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        themeModeStore.setThemeMode('dark')
    } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        themeModeStore.setThemeMode('light')
    }
}
</script>
