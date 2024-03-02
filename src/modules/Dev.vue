<template>
  <div class="overflow-auto">
    <div class="text-[28px]">开发工具</div>
    <button class="border" @click="toggleTheme">点击切换主题{{ themeMode }}</button>
    <br />
    <p class="text-[20px]">编辑器</p>
    <editor-content :editor="editor" />
    <br />
    <h1 class="text-[20px]">图标库</h1>
    <section class="flex gap-4 flex-wrap max-w-[1000px]">
      <div v-for="icon in icons" :key="icon" class="px-2 py-2 cursor-pointer" @click="copyIcon(icon)">
        <div>{{ icon }}</div>
        <NtIcon :icon="icon"></NtIcon>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useThemMode } from '@/stores'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { ThemeMode, Icon } from '@/models'
import { iconMap } from '@/utils';
import { message } from 'ant-design-vue';

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

const icons = Object.keys(iconMap).sort() as Icon[]
function copyIcon(icon: Icon) {
  navigator.clipboard.writeText(`<NtIcon :icon="${icon}"></NtIcon>`).then(() => {
    message.success('复制icon成功')
  })
}
</script>
