<template>
    <NtHeader title="标签">
        <template #edit>
            <div class="flex items-center space-x-3 [&>button]:border [&>button]:border-light-2 [&>button]:rounded-4">
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
                :class="['border rounded-3 bg-light space-x-2', item.isSelected ? '[&>span]:text-white bg-theme' : '']"
                v-for="item in tags" :key="item.id" @click="select(item)">
                <span class="text-light-6">{{
                    item.name }}</span><span class="text-light-5 text-[12px]">{{
                    item.count }}</span>
            </NtButton>
        </div>
    </NtContent>
    <!-- 新增分类弹窗 -->
    <EditCategoryDialog v-model:open="categoryOpen" v-model:id="categoryId"></EditCategoryDialog>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
const categoryOpen = ref(false)
const categoryId = ref<number>()
const arr = new Array(35).fill(1)
type Tag = {
    name: string
    count: number
    id: number
    isSelected: boolean
}
const tags = ref<Tag[]>(arr.map((_, i) => ({
    name: `标签`,
    count: Math.round(Math.random() * 100),
    id: i + 1,
    isSelected: false
})))

const selectKeys = ref<number[]>([])

function select(item: Tag) {
    console.log(item.id);

    if (!item.id) {
        return
    }
    item.isSelected = !item.isSelected

    saveKeys(item.id, item.isSelected)

}

function saveKeys(id: number, isSelected?: boolean) {
    const idx = selectKeys.value.findIndex(d => d === id)

    if (idx > -1) {
        if (isSelected) {
            return
        } else {
            selectKeys.value.splice(idx, 1)
        }
    } else {
        if (isSelected) {
            selectKeys.value.push(id)
        } else {
            console.warn('找不到,无法删除')
        }
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
    tags.value.sort((a, b) => b.count - a.count)
}

</script>
