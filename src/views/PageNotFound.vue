
<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <div
            class="flex flex-col items-center p-12 space-y-2 text-gray-500 transition-opacity duration-300 border rounded-lg cursor-pointer justfiy-center hover:opacity-70">
            <div class="text-4xl font-bold">404</div>
            <div @click="$router.replace({
                name: Routes.home
            })">找不到该页面，点击回到首页</div>
        </div>
    </div>
</template>
<script setup  lang="ts">
import { Routes } from '@/models';


</script>
