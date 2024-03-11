<template>
    <div class="flex w-full h-full">
        <aside :style="{ width: sidebarWidth + 'px' }
            " class="relative w-[--aside-width] pt-[48px] pb-[54px] bg-light flex flex-col">
            <NtInput class="mx-6 bg-light-2" placeholder="搜索">
                <template #prefix>
                    <NtIcon icon="search"></NtIcon>
                </template>
            </NtInput>
            <NtMenusTitle title="概览"></NtMenusTitle>
            <NtMenus :menus="menus"></NtMenus>
            <NtMenusTitle title="分类">

                <template #append>
                    <NtIcon icon="addTag" class="cursor-pointer" @click="categoryOpen = true"></NtIcon>
                </template>
            </NtMenusTitle>
            <NtScrollbar>
                <NtMenus class="overflow-auto scroll-bar" :menus="category" type="category"></NtMenus>
            </NtScrollbar>

            <div class="h-[54px] pl-[18px] pt-[10px] pb-[14px] fixed bottom-0">
                <NtIcon icon="setting2"></NtIcon>
            </div>
            <div @mousedown="startResize" @mouseup="stopResize"
                class="h-full w-2 cursor-col-resize bg-transparent absolute top-0 bottom-0 right-0"></div>
        </aside>
        <main class="relative flex flex-1 overflow-auto bg-default text-light-7">
            <!-- <NtHeader :title="`${query.title||''}`"></NtHeader>
            <NtContent>
            </NtContent> -->
            <RouterView></RouterView>
        </main>
        <!-- 新增分类弹窗 -->
        <EditCategoryDialog v-model:open="categoryOpen"></EditCategoryDialog>
    </div>
</template>

<script setup lang="ts">
import { menus, category } from '@/mock';
import { sidebarWidth } from "@/utils";
const categoryOpen = ref<boolean>(false)


let isResizing = false;
let startX = 0;
let startWidth = 0;

function startResize(event: MouseEvent) {
    isResizing = true;
    startX = event.clientX;
    startWidth = sidebarWidth.value;
    document.addEventListener('mousemove', resize)
    document.addEventListener('mouseup', stopResize);
}

function resize(event: MouseEvent) {
    if (!isResizing) return;
    const diffX = event.clientX - startX;
    const newWidth = startWidth + diffX;
    sidebarWidth.value = Math.max(170, newWidth); // 设置最小宽度为50px 
    if (newWidth >= 350) {
        sidebarWidth.value = 350
    }
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
}

</script>

<!-- <style scoped>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
    /*轨道阴影*/
    border-radius: 0px;
    /*轨道背景区域的圆角*/
    background-color: transparent;
    /*轨道的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 2px;
    /*滑块圆角*/
    -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    /*滑块外阴影*/
    background-color: rgba(136, 219, 255, 1);
    /*滑块背景颜色*/
}
</style> -->