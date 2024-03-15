<template>
    <NtHeader title="全部">
        <NtTag v-for="tag in tagList" :key="tag.id" :value="tag.id" @activated="d => {
            console.log(d, '激活');

        }">
            {{ tag.name }}</NtTag>
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
type Tag = {
    link?: string
    name?: string
    id?: number
}
const tagList = ref<Tag[]>([{
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
},
])

</script>
