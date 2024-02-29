<template>
    <div class="flex w-full h-full">
        <aside class="w-[225px] bg-light h-full">
            <NtMenusTitle title="概览"></NtMenusTitle>
            <NtMenus :menus="menus"></NtMenus>
            <NtMenusTitle title="分类">
                <template #append>
                    <div class="w-[30px] h-[30px] bg-[url('@/assets/icon/add-tag.svg')] bg-center bg-no-repeat"></div>
                    <!-- <NtIcon icon="add-tag"></NtIcon> -->
                </template>
            </NtMenusTitle>
            <NtMenus :menus="menus"></NtMenus>
        </aside>
        <main class="flex-1">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">
import { menus } from '@/mock';
</script>
