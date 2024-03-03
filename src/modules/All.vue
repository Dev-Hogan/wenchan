<template>
    <NtHeader title="全部">
        <NtTag v-for="i in 4" :key="i" :value="i" @activated="d => {
            console.log(d, '激活');

        }">
            {{ i }}</NtTag>
    </NtHeader>
    <NtContent class="!mt-[120px]">
        <NtEditorContent v-model="text"></NtEditorContent>
        <div>{{ text }}</div>
    </NtContent>
</template>

<script setup lang="ts">

const text = ref('<h1>输入文字</h1>')

</script>
