<template>
    <NtHeader title="全部">
        <NtTag v-for="i in 4" :key="i" :value="i" @activated="d => {
            console.log(d, '激活');

        }">
            {{ i }}</NtTag>
    </NtHeader>
    <NtContent class="!mt-[120px]">
        <NtEditorContent v-model="text">
            <template #linkTags>
                <NtIconButton icon="link" class="px-3 py-2 bg-light rounded-2 text-[12px] text-tag font-medium">
                    基础知识
                </NtIconButton>
                <NtIconButton icon="link" class="px-3 py-2 bg-light rounded-2 text-[12px] text-tag font-medium">
                    UI相关
                </NtIconButton>
            </template>
        </NtEditorContent>
        <code>{{ text }}</code>
    </NtContent>
</template>

<script setup lang="ts">

const text = ref('')

</script>
