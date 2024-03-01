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
            <NtMenus :menus="menus"></NtMenus>
        </aside>
        <main class="flex-1 overflow-auto">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">
import { menus } from '@/mock';
</script>
