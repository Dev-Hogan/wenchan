<template>
    <div class="flex w-full h-full">
        <aside class="w-[225px] bg-light h-full">
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
