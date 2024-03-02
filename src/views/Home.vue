<template>
    <div class="flex w-full h-full">
        <aside class="w-[225px] bg-light h-full">
            <NtMenusTitle title="概览"></NtMenusTitle>
            <NtMenus :menus="menus"></NtMenus>
            <NtMenusTitle title="分类">
                <template #append>
                    <NtIcon icon="addTag"></NtIcon>
                </template>
            </NtMenusTitle>
            <NtMenus :menus="category" type="category"></NtMenus>
        </aside>
        <main class="flex-1 overflow-auto bg-default text-light-7">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">
import { menus, category } from '@/mock';
</script>
