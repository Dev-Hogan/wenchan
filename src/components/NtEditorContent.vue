<template>
    <div>

        <editor-content :editor="editor" :class="['border rounded-4 border-light-2',
            isFocused ? 'border-theme' : '',
            'editor [&>div]:min-h-[260px] [&>div]:border [&>div]:border-theme']" @focusin="isFocused = true"
            @focusout="isFocused = false">

        </editor-content>
        <NtIcon icon="bold" @click="editor?.chain().focus().toggleBold().run()"
            :disabled="!editor?.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor?.isActive('bold') }"></NtIcon>
    </div>
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
const modelValue = defineModel<string>()
const isFocused = ref(false)
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
.editor {
    @apply [&>div]:min-h-[260px] [&>div]:border [&>div]:border-theme;
}

</style>
