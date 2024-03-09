<template>
  <NtHeader title="header">
    <template #right>
      <div>👉</div>
      <div>👉</div>
    </template>
  </NtHeader>
  <NtContent>

    <h1>开发工具</h1>
    <button class="border" @click="toggleTheme">点击切换主题{{ themeMode }}</button>
    <br />
    <h1>编辑器</h1>
    <editor-content :editor="editor" />
    <br />
    <h1>图标库</h1>
    <section class="flex gap-4 flex-wrap max-w-[1000px]">
      <div v-for="icon in icons" :key="icon" class="px-2 py-2 cursor-pointer" @click="copyIcon(icon)">
        <div>{{ icon }}</div>
        <NtIcon :icon="icon"></NtIcon>
      </div>
    </section>
    <h1>组件</h1>
    <br />
    <NtInput v-model="inputValue">

      <template #prefix>
        <NtIcon icon="search"></NtIcon>
      </template>
    </NtInput>
    <div>{{ inputValue }}</div>
    <br>
    <Dialog>
    </Dialog>
    <NtButton type="primary" @click="dialogOpen = true">点击弹窗</NtButton>
    <NtDialog title="false" v-model:open="dialogOpen">
      123</NtDialog>

    <HighLight></HighLight>
    <NtInput hight-light></NtInput>
    <div>流水线测试12</div>
  </NtContent>


</template>

<script setup lang="ts">
import { useThemMode } from '@/stores'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Icon, ThemeMode } from '@/models'
import { iconMap } from '@/utils';
import { message } from 'ant-design-vue';
import { Dialog } from '@/components/NtDialog2';
import { useClipboard } from '@vueuse/core'

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
  try {
    console.log(navigator, navigator.clipboard);

    navigator.clipboard.writeText(`<NtIcon icon="${icon}"></NtIcon>`).then(() => {
      message.success('复制icon成功')
    })
  } catch (e) {
    // console.log(navigator);
    console.log(e, 'http没有复制api');
    console.log(`<NtIcon icon="${icon}"></NtIcon>`);


  }
}

const inputValue = ref<string>('123')


const dialogOpen = ref<boolean>(false)
</script>
