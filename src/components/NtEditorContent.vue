<template>
    <div class="relative">
        <editor-content :editor="editor">
        </editor-content>
        <NtIconButton class="absolute top-[10px] right-[24px]" icon="more"></NtIconButton>
        <menu class="flex flex-1 h-[54px] w-full absolute bottom-0 left-0  px-[18px] justify-between items-center">
            <div class="flex">
                <NtIconButton icon="linkTag"></NtIconButton>
                <NtIconButton icon="picture"></NtIconButton>
                <NtIconButton icon="bold" @click="editor?.chain().focus().toggleBold().run()"
                    :disabled="!editor?.can().chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor?.isActive('bold') }"></NtIconButton>
                <NtIconButton icon="numbering" @click="editor?.chain().focus().toggleOrderedList().run()"
                    :class="{ 'is-active': editor?.isActive('orderedList') }"></NtIconButton>
                <NtIconButton icon="li" @click="editor?.chain().focus().toggleBulletList().run()"
                    :class="{ 'is-active': editor?.isActive('bulletList') }"></NtIconButton>
                <NtIconButton icon="fullScreen2"></NtIconButton>
            </div>
            <NtIconButton icon="publish"></NtIconButton>
        </menu>
    </div>
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from "@tiptap/extension-placeholder";
const modelValue = defineModel<string>()
modelValue.value = '<h1>输入问题内容</h1><p class="text-pla">写自己的答案</p>'


const editor = shallowRef<Editor>()

onMounted(() => {
    editor.value = new Editor({
        extensions: [StarterKit.configure({
            heading: {
                levels: [1],
            },


        }),
        Placeholder.configure({
            placeholder: '123'
        })],
        editorProps: {
            attributes: {
                class: 'border-theme bg-theme-10 border focus:outline-none min-h-[150px] px-[---editor-px] pt-[12.5px] pb-[54px] line-light-[25px] rounded-4 text-light-7 [&>h1]:font-medium [&>h1]:mb-[12.5px] [&>h1]:text-[18px] [&>p]:text-[14px] [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:ml-[18px] [&>ol]:ml-[14px]'

            }
        },
        autofocus: 'start',

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
    @apply font-medium;

}
</style>
