<template>
  <NtHeader :title="`${query.title || ''}`" @add="() => (hasNewNote = true)">
    <NtTagGroup
      v-model="currenTagId"
      :category-id="currentCategoryId"
      :key="currentCategoryId"
    ></NtTagGroup>
  </NtHeader>
  <NtContent class="!mt-[--content-top]">
    <!-- 分类{{ currentCategoryId }}
    <div>{{ currenTagId }}</div>
    {{ Notes }} -->
    <NtEditorCard
      @publish="
        (d, count) =>
          handleSaveNote({
            isEmpty: d,
            content: NoteEntity.content,
            count
          })
      "
      can-edit
      v-if="hasNewNote"
      v-model:content="NoteEntity.content"
      :model-value="NoteEntity"
    ></NtEditorCard>
    <NtEditorCard
      @publish="
        (d, count) =>
          handleSaveNote({
            isEmpty: d,
            content: item.content,
            id: item.id,
            count
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
import { useNumberSessionRef } from '@/utils'
import router from '@/router'
import { searchNote, saveNote, deleteNote } from '@/api'
import { useAsyncState } from '@vueuse/core'
import { Note } from '@/models'
const currentRouter = router.currentRoute
const query = computed(() => currentRouter.value.query)
const currentCategoryId = computed(() => +(currentRouter.value.params.categoryId || 0))

const currenTagId = useNumberSessionRef(`${currentRouter.value.params.categoryId}-tagId`)

const { state: Notes, execute: refreshNotes } = useAsyncState(
  async () => await searchNote({ tagId: currenTagId.value, categoryId: currentCategoryId.value }),
  [],
  {
    immediate: false
  }
)
const NoteEntity = ref<Note>({
  content: ''
})
watch(
  () => [currenTagId.value, currentCategoryId.value],
  () => {
    refreshNotes()
    NoteEntity.value.categoryId = currentCategoryId.value
  },
  {
    immediate: true
  }
)

const hasNewNote = ref(false)

async function handleSaveNote({
  isEmpty = false,
  content = '',
  id,
  count
}: {
  isEmpty?: boolean
  content?: string
  id?: number
  count?: number
}) {
  const defaultContent = '未命名笔记'
  await saveNote({
    content: isEmpty ? defaultContent : content,
    id,
    tagId: currenTagId.value,
    categoryId: currentCategoryId.value,
    count
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
