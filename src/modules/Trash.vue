<template>
  <NtHeader title="垃圾篓" @add="() => (hasNewNote = true)" @toggle="(d) => (isFold = d)">
    <NtTagGroup v-model="tagId"></NtTagGroup>
  </NtHeader>

  <NtContent class="!mt-[130px]" content-class="space-y-5">
    <!-- <NtEditorCard
      @publish="
        (d) =>
          handleSaveNote({
            isEmpty: d,
            content: NoteEntity.content
          })
      "
      can-edit
      v-if="hasNewNote"
      v-model:content="NoteEntity.content"
      :model-value="NoteEntity"
    ></NtEditorCard> -->
    <NtEditorCard
      @publish="
        (d) =>
          handleSaveNote({
            isEmpty: d,
            content: item.content,
            id: item.id
          })
      "
      :can-edit="isFold"
      @delete="(d) => d && handleDeleteNote([d])"
      v-for="item in Notes"
      :key="item.id"
      v-model:content="item.content"
      :model-value="item"
    ></NtEditorCard>
  </NtContent>
</template>

<script setup lang="ts">
import { useAsyncState, useSessionStorage } from '@vueuse/core'
import { searchTrashNote, saveNote, deleteNote } from '@/api'
import { Note } from '@/models'

const tagId = useSessionStorage<number | undefined>('trash-tagid', undefined, {
  serializer: {
    read: (raw) => {
      return raw ? +raw : undefined
    },
    write: (raw) => (raw ? raw + '' : '')
  }
})

const { state: Notes, execute: refreshNotes } = useAsyncState(
  async () =>
    await searchTrashNote({
      tagId: tagId.value
    }),
  [],
  {
    immediate: false
  }
)
watch(
  tagId,
  () => {
    refreshNotes()
  },
  {
    immediate: true
  }
)
const NoteEntity = ref<Note>({
  content: ''
})
const hasNewNote = ref(false)

async function handleSaveNote({
  isEmpty = false,
  content = '',
  id
}: {
  isEmpty?: boolean
  content?: string
  id?: number
}) {
  const defaultContent = '未命名笔记'
  await saveNote({
    content: isEmpty ? defaultContent : content,
    id,
    tagId: tagId.value,
    isFocused: true
  })
  if (!id) {
    hasNewNote.value = false
    NoteEntity.value.content = ''
    refreshNotes()
  }
}

async function handleDeleteNote(ids: number[]) {
  await deleteNote(ids)
  refreshNotes()
}

const isFold = ref(false)
</script>
