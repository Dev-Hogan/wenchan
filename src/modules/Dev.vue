<template>
  <div>
    <div>开发工具</div>
    <button class="border" @click="toggleTheme">点击切换主题{{ themeMode }}</button>
    <br />
    <p>编辑器</p>
    <editor-content :editor="editor" />
    <br />
    <div @click="test.setA">测试状态管理{{ test.a }}</div>
  </div>
</template>

<script setup lang="ts">
import { useThemeModeStore } from '@/stores'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { useTest } from '@/stores/test'

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

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1, 2]
      }
    })
  ]
})

const test = useTest()
</script>
