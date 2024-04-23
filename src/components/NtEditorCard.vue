<template>
  <div
    :class="[
      '_editor-card relative overflow-hidden transition-[height] duration-[2s] ease-linear',
      isEdit ? 'is-active max-h-[246px]' : 'max-h-[53px]'
    ]"
  >
    <div class="space-y-[9px]">
      <NtEditor2 ref="editorRef" :model-value class="cursor-default"></NtEditor2>
      <div class="flex space-x-2 absolute top-[4px] right-[20px]">
        <NtIconButton icon="link3" class="!text-light-3 text-[12px] font-medium">5</NtIconButton>
        <NtDropdown
          :chars="editorRef?.editor?.getText()?.length"
          :options="[
            {
              name: '沉浸模式',
              icon: 'fullscreen1Theme'
            },
            {
              name: '取消聚焦',
              icon: 'focusTheme',
              split: true
            },
            {
              name: '编辑',
              icon: 'editTheme',
              action: () => edit()
            },
            {
              name: '标签',
              icon: 'linkTheme',
              split: true
            },

            {
              name: '分享',
              icon: 'shareTheme'
            },
            {
              name: '删除',
              icon: 'trashTheme'
            }
          ]"
        >
          <NtIconButton icon="more"></NtIconButton>
        </NtDropdown>
      </div>
      <div class="inline-block text-tag text-[12px] font-medium bg-light rounded-3 p-3">
        <div class="flex items-center space-x-1"><NtIcon icon="link"></NtIcon> 基础知识</div>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <NtIconButton icon="tag"></NtIconButton>
          <NtIconButton icon="picture"></NtIconButton>
          <NtIconButton
            icon="bold"
            @click="editor?.chain().focus().toggleBold().run()"
            :disabled="!editor?.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor?.isActive('bold') }"
          ></NtIconButton>
          <NtIconButton
            icon="numbering"
            @click="editor?.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor?.isActive('orderedList') }"
          ></NtIconButton>
          <NtIconButton
            icon="li"
            @click="editor?.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor?.isActive('bulletList') }"
          ></NtIconButton>
          <!-- <NtIconButton icon="fullScreen2"></NtIconButton> -->
        </div>
        <NtButton type="primary" class="rounded-[28px]" @click="publish">发布</NtButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NtEditor2 from './NtEditor2.vue'
const editorRef = ref<InstanceType<typeof NtEditor2>>()
const modelValue = defineModel<string>({ default: '<h1>这是标题</h1>' })
const editor = computed(() => editorRef.value?.editor)
nextTick(() => {
  editor.value?.setEditable(false)
})
const isEdit = ref(false)
function edit() {
  if (!editor.value?.isEditable) {
    editor.value?.setEditable(true)
    isEdit.value = true
    editor.value?.commands?.focus()
  } else {
    editor.value?.commands?.focus()
  }
}

function publish() {
  editor.value?.setEditable(false)
  isEdit.value = false
  editor.value?.commands?.blur()
}
</script>
<style lang="scss" scoped>
._editor-card {
  @apply border border-transparent py-[12px] px-[20px]  rounded-4;
  @apply transition-all;
  &:hover {
    @apply cursor-pointer shadow-[0_4px_12px_0_rgba(0,0,0,0.03)];
  }
  &.is-active {
    @apply shadow-[0_4px_12px_0_rgba(0,0,0,0.03)] border-theme bg-['#fffefc'];
  }
}
</style>
