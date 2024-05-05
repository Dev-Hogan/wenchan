<template>
  <NtHeader title="标签">
    <template #edit>
      <div
        class="flex items-center space-x-3 [&>button]:border [&>button]:border-light-2 [&>button]:rounded-4"
      >
        <NtButton @click="handleAddTag">测试新增标签</NtButton>
        <NtButton @click="handelGo2tag">前往</NtButton>
        <NtButton @click="handleMerge">合并</NtButton>
        <NtButton @click="handleRename">重命名</NtButton>
        <NtButton>删除</NtButton>
        <NtButton @click="handleOrder" class="h-[36px]">
          <NtIcon icon="sort2"></NtIcon>
        </NtButton>
      </div>
    </template>
  </NtHeader>
  <NtContent>
    <div class="flex flex-wrap gap-5 mt-[33px]">
      <NtButton
        :class="[
          'border rounded-3 bg-light space-x-2',
          selectKeys.includes(item.id || 0) ? '[&>span]:text-white bg-theme' : ''
        ]"
        v-for="item in tags"
        :key="item.id"
        @click="select(item)"
      >
        <span class="text-light-6">{{ item.name }}</span
        ><span class="text-light-5 text-[12px]">{{ item.charsCount || 0 }}</span>
      </NtButton>
    </div>
  </NtContent>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
import { getAllTags, saveTag } from '@/api'
import { useAsyncState } from '@vueuse/core'
import { Tag } from '@/models'
const categoryOpen = ref(false)
const categoryId = ref<number>()

const selectKeys = ref<number[]>([])

const { state: tags, execute: refreshTags } = useAsyncState(async () => await getAllTags(), [], {
  immediate: false
})
refreshTags()

function select(item: Tag) {
  if (!item.id) {
    return
  }
  const hasKeyIdx = selectKeys.value.findIndex((d) => item.id === d)
  if (hasKeyIdx > -1) {
    selectKeys.value.splice(hasKeyIdx, 1)
  } else {
    selectKeys.value.push(item.id)
  }
}

function cannotMerge() {
  if (selectKeys.value.length < 2) {
    message.warn('数量小于2个，无法合并')
  }
}

function handleMerge() {
  cannotMerge()
}
function handleRename() {
  if (selectKeys.value.length >= 2 || selectKeys.value.length === 0) {
    message.warn('无法重命名')
    return
  }
  categoryOpen.value = true
  categoryId.value = selectKeys.value[0]
}

function handelGo2tag() {
  if (selectKeys.value.length >= 2 || selectKeys.value.length === 0) {
    message.warn('无法前往标签')
    return
  }
}

function handleOrder() {
  tags.value.sort((a, b) => (b?.charsCount || 0) - (a?.charsCount || 0))
}

async function handleAddTag() {
  await saveTag({ name: '测试新增标签' })
  refreshTags()
}
</script>
