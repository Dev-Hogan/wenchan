<template>
    <div class="relative editor overflow-hidden" ref="el">
        <editor-content :editor="editor" :class="[isFullscreen ? 'mt-[46px] content' : '']">
        </editor-content>
        <NtIconButton class="absolute top-[10px] right-[24px]" icon="more"></NtIconButton>
        <div v-if="$slots.linkTags"
            :class="['flex h-[37px] space-x-5 max-w-[750px]', isFullscreen ? 'absolute mx-auto bottom-[97px] link ' : '']">
            <slot name="linkTags"></slot>
        </div>
        <menu :class="['flex flex-1 h-[54px] w-full absolute bottom-0 left-0  px-[18px] justify-between items-center',
            isFullscreen ? 'max-w-[750px] left-[50%] border mb-[25px] translate-x-[-50%] shadow2 rounded-[11px]' : ''
        ]">
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
                <NtIconButton icon="fullScreen2" @click="toggle"></NtIconButton>
            </div>
            <NtIconButton icon="publish"></NtIconButton>
        </menu>
    </div>
</template>

<script setup lang="ts">
import { EditorContent, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from "@tiptap/extension-placeholder";
import { useFullscreen } from "@vueuse/core";
const modelValue = defineModel<string>()
modelValue.value = '<h1>输入问题内容</h1><p>写自己的答案</p>'


const editor = shallowRef<Editor>()

const el = ref<HTMLElement | null>(null)

const { isFullscreen, toggle } = useFullscreen(el)

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
                class: 'content mx-auto max-w-[750px] h-full mb-[20px] focus:outline-none [&>h1]:font-medium [&>h1]:mb-[12.5px] [&>h1]:text-[18px] [&>p]:text-[14px] [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:ml-[18px] [&>ol]:ml-[14px]'

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
.link {
    left: calc(50% - 350px);
}

.content {
    max-height: calc(100vh - 97px);
}
</style>
