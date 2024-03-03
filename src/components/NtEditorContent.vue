<template>
    <editor-content :editor="editor" class="border rounded-4 border-light-2 min-h-[260px]" />
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
const modelValue = defineModel<string>()
withDefaults(
    defineProps<{

    }>(), {}
)
const editor = shallowRef<Editor>()
onMounted(() => {
    editor.value = new Editor({
        extensions: [
            StarterKit,
        ],
        content: modelValue.value,
        onUpdate: () => {
            // HTML
            modelValue.value = editor.value?.getHTML()

            // JSON
            // this.$emit('update:modelValue', this.editor.getJSON())
        },
    })
})
onBeforeUnmount(() => {
    editor.value?.destroy()
})
</script>

<style scoped>
.content {
    @apply border rounded-4 border-light-2 min-h-[260px];
}
p {
    height: 40px;
}
</style>
