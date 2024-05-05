<template>
  <NtHeader title="全部" @add="() => (hasNewNote = true)">
    <NtTag
      v-for="tag in tagList"
      :key="tag.id"
      :value="tag.id"
      @activated="
        (d) => {
          console.log(d, '激活')
        }
      "
    >
      <NtDropdown
        :trigger="'contextmenu'"
        :options="[
          {
            name: '前往该标签',
            icon: 'tagTheme',
            split: true
          },
          {
            name: '重命名',
            icon: 'editTheme'
          },
          {
            name: '删除标签',
            icon: 'trashTheme',
            split: true
          }
        ]"
      >
        {{ tag.name }}
      </NtDropdown>
    </NtTag>
  </NtHeader>
  <NtContent class="!mt-[120px]" content-class="space-y-5">
    <NtEditorCard
      @publish="
        (d) =>
          handleSaveNote({
            count: d,
            content: NoteEntity.content
          })
      "
      :can-edit="true"
      v-if="hasNewNote"
      v-model:content="NoteEntity.content"
    ></NtEditorCard>
    <NtEditorCard
      @publish="
        (d) =>
          handleSaveNote({
            count: d,
            content: item.content,
            id: item.id
          })
      "
      @delete="(d) => d && handleDeleteNote(d)"
      v-for="item in Notes"
      :key="item.id"
      v-model:content="item.content"
      :model-value="item"
    ></NtEditorCard>
  </NtContent>
</template>

<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { searchNote, saveNote, deleteNote } from '@/api'
import { Note } from '@/models'
type Tag = {
  link?: string
  name?: string
  id?: number
}
const tagList = ref<Tag[]>([
  {
    name: '所有内容',
    id: Math.random()
  },
  {
    name: '基础知识',
    id: Math.random()
  },
  {
    name: '进阶内容',
    id: Math.random()
  }
])
const { state: Notes, execute: refreshNotes } = useAsyncState(
  async () => await searchNote({}),
  [],
  {
    immediate: false
  }
)
refreshNotes()
const NoteEntity = ref<Note>({
  content: ''
})
const hasNewNote = ref(false)

async function handleSaveNote({
  count = 0,
  content = '',
  id
}: {
  count?: number
  content?: string
  id?: number
}) {
  const defaultContent = '未命名笔记'
  await saveNote({ content: count ? content : defaultContent, id })
  if (!id) {
    hasNewNote.value = false
    NoteEntity.value.content = ''
  }
  refreshNotes()
}

async function handleDeleteNote(id: number) {
  await deleteNote(id)
  refreshNotes()
}
</script>
