<template>
  <Dropdown
    :trigger
    v-model:open="open"
    overlay-class-name="shadow-[0_18px_24px_[-10px]_rgba(0,0,0,0.06)]"
  >
    <slot></slot>
    <template #overlay>
      <div class="w-[438px] h-[288px] bg-default rounded-[14px] border border-light-2">
        <NtTabs :tabs v-model:model-value="currentTab"></NtTabs>
        <div class="flex flex-col flex-1 px-8 space-y-5">
          <NtInput placeholder="搜索或创建标签" class="bg-light h-[40px]">
            <template #prefix>
              <NtIcon icon="search"></NtIcon>
            </template>
          </NtInput>
          <div class="flex flex-1 flex-wrap gap-2">
            <div
              v-for="item in tagsMock"
              :key="item.id"
              :class="[
                'cursor-pointer flex items-center justify-center bg-light text-light-6 text-[14px] py-5 px-7 border rounded-3',
                isSelected(item.id) ? 'bg-theme text-white' : ''
              ]"
              @click="toggleKey(item.id)"
            >
              {{ item.name }}
            </div>
            <div
              class="cursor-pointer flex items-center justify-center border-dashed border-light-3 py-5 px-7 border rounded-3"
            >
              <NtIcon icon="add"></NtIcon>新的标签
            </div>
          </div>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown } from 'ant-design-vue'
type Trigger = 'click' | 'hover' | 'contextmenu'
withDefaults(
  defineProps<{
    trigger?: Trigger
  }>(),
  {
    trigger: 'click'
  }
)
const open = ref(false)
const tabs = [
  {
    id: 1,
    name: '此分类标签'
  },
  {
    id: 2,
    name: '其他分类标签'
  }
]
const currentTab = ref(1)
const tagsMock = [
  {
    id: 1,
    name: '基础知识'
  },
  {
    id: 2,
    name: '上架内容'
  },
  {
    id: 3,
    name: '动画内容'
  },
  {
    id: 4,
    name: '第三方库'
  },
  {
    id: 5,
    name: '应用内购'
  },
  {
    id: 6,
    name: '数据相关'
  }
]
const selectKeys = ref<number[]>([2, 5])

function isSelected(key: number) {
  return selectKeys.value.includes(key)
}
function toggleKey(key: number) {
  const idx = selectKeys.value.findIndex((k) => k === key)
  if (idx > -1) {
    selectKeys.value.splice(idx, 1)
  } else {
    selectKeys.value.push(key)
  }
}
</script>
