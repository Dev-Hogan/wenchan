<template>
  <editor-content :editor="editor" :class="['w-full min-h-[40px]']"> </editor-content>
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
const modelValue = defineModel<string>()
const editor = shallowRef<Editor>()
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1]
        }
      }),
      Placeholder.configure({
        placeholder: '123'
      })
    ],
    editorProps: {
      attributes: {
        // eslint-disable-next-line max-len
        class:
          // eslint-disable-next-line max-len
          'content mx-auto max-w-[750px] h-full mb-[20px] focus:outline-none [&>h1]:font-medium [&>h1]:mb-[12.5px] [&>h1]:text-[18px] [&>p]:text-[14px] [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:ml-[18px] [&>ol]:ml-[14px]'
      }
    },
    autofocus: true,

    content: modelValue.value,
    onUpdate: () => {
      // HTML
      modelValue.value = editor.value?.getHTML()
    }
  })
})
onBeforeUnmount(() => {
  editor.value?.destroy()
})

defineExpose({
  editor
})
</script>
