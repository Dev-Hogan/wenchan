<template>
  <NtDialog v-model:open="open" :title="isEdit ? '重命名' : ''">
    <NtInput
      v-model="tagName"
      class="pl-3 py-[9px] select-all"
      input-class="select-all"
      auto-focus
    ></NtInput>
    <template #footer>
      <NtButton @click="resetDialog">取消</NtButton>
      <NtButton type="primary" @click="handleSave(tagName)">确认</NtButton>
    </template>
  </NtDialog>
</template>

<script setup lang="ts">
import { batchSaveStore } from '@/service/controller'
import { Tables, Category } from '@/service/model'
import { message } from 'ant-design-vue'
const open = defineModel<boolean>('open')
const dialogId = defineModel<number>('id', undefined)
const tagName = ref<string>('新增分类名称')
const props = withDefaults(
  defineProps<{
    id?: number
    whenSave?: () => any
  }>(),
  {
    id: undefined,
    whenSave: undefined
  }
)
const isEdit = computed(() => !!props.id)
function resetDialog() {
  open.value = false
  dialogId.value = undefined
}

async function handleSave(val = '未命名分类') {
  await batchSaveStore<Category>(Tables.category, [{ title: val, id: props.id, icon: 'ask2' }])
  message.success('新增分类分类成功')
  resetDialog()
  props.whenSave?.()
}
</script>
