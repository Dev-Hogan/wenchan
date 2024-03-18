<template>
    <NtDialog v-model:open="open" :title="isEdit ? '重命名' : ''">
        <NtInput v-model="tagName" class="pl-3 py-[9px]" input-class="highlight"></NtInput>
        <template #footer>
            <NtButton @click="resetDialog">取消</NtButton>
            <NtButton type="primary">确认</NtButton>
        </template>
    </NtDialog>
</template>

<script setup lang="ts">

// import { useAsyncState } from "@vueuse/core";
const open = defineModel<boolean>('open')
const dialogId = defineModel<number>('id', undefined)
const tagName = ref<string>('新增分类名称')
const props = withDefaults(
    defineProps<{
        id?: number,
    }>(), {
    id: undefined
}
)
const isEdit = computed(() => !!props.id)
// const emit = defineEmits<{
//     (e: 'id', d?: number): void
// }>()
// const { } =useAsyncState()
function resetDialog() {
    open.value = false
    dialogId.value = undefined
}
</script>
