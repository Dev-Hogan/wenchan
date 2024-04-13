<template><editor-content :editor="editor" /></template>
<script setup lang="ts">
import {
  // useEditor,
  EditorContent,
  Editor
} from '@tiptap/vue-3'
// import StarterKit from '@tiptap/starter-kit'
withDefaults(defineProps<{ modelValue?: string }>(), { modelValue: '请输入' })
defineEmits<{
  (e: 'update:model-value', d: string | undefined): void
}>()
const editor = ref<Editor>()
onMounted(() => {
  editor.value = new Editor({})
})
</script>
