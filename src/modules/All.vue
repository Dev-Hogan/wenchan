<template>
    <NtHeader title="全部">

        <NtTag v-for="tag in tagList" :key="tag.id" :value="tag.id" @activated="d => {
            console.log(d, '激活');

        }">
            <NtDropdown :trigger="'contextmenu'" :options="[{
            name: '前往该标签',
            icon: 'tag',
            iconClass: 'stroke-theme',
            split: true,
        }, {
            name: '重命名',
            icon: 'edit',
            iconClass: 'stroke-theme',

        }, {
            name: '删除标签',
            iconClass: 'stroke-theme',
            icon: 'trash',
            split: true

        }]">
                {{ tag.name }}
            </NtDropdown>
        </NtTag>
    </NtHeader>
    <NtContent class="!mt-[120px]" content-class="space-y-5">
        <NtCard v-for="i in 5" :key="i"></NtCard>
    </NtContent>
</template>

<script setup lang="ts">

// const text = ref('')
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
