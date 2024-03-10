<template>
    <NtDialog v-model:open="open">
        <NtInput v-model="tagName" class="pl-3 py-[9px]" input-class="highlight"></NtInput>
        <template #footer>
            <NtButton @click="open = false">取消</NtButton>
            <NtButton type="primary">确认</NtButton>
        </template>
    </NtDialog>
</template>

<script setup lang="ts">
const open = defineModel<boolean>('open')
const tagName = ref<string>('新增分类名称')
// const range = document.createRange();
// const clientRect = range.getBoundingClientRect();
</script>
