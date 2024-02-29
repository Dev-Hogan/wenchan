<template>
  <div>
    <div>开发工具</div>
    <button class="border" @click="toggleTheme">点击切换主题{{ themeMode }}</button>
    <br />
    <p>编辑器</p>
    <editor-content :editor="editor" />
    <br />
  </div>
</template>

<script setup lang="ts">
import { useThemMode } from '@/stores'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { ThemeMode } from '@/models';

const themeModeStore = useThemMode()
const themeMode = computed(() => themeModeStore.themeMode.value)
function toggleTheme() {
  if (themeMode.value === ThemeMode.light) {
    document.documentElement.classList.remove(ThemeMode.light)
    document.documentElement.classList.add(ThemeMode.dark)
    themeModeStore.setThemeMode(ThemeMode.dark)
  } else {
    document.documentElement.classList.remove(ThemeMode.dark)
    document.documentElement.classList.add(ThemeMode.light)
    themeModeStore.setThemeMode(ThemeMode.light)
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

</script>
