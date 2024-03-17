<template>
    <div class="flex w-full h-full">
        <aside :style="{ width: sidebarWidth + 'px' }"
            class="relative w-[--aside-width] pt-[48px] pb-[54px] bg-light flex flex-col border-r-[1px]">
            <NtInput class="mx-6 bg-light-2" placeholder="搜索">
                <template #prefix>
                    <NtIcon icon="search"></NtIcon>
                </template>
            </NtInput>
            <NtMenusTitle title="概览"></NtMenusTitle>
            <NtMenus :menus="menus"></NtMenus>
            <NtMenusTitle title="分类">
                <template #append>
                    <NtIconButton icon="addTag" @click="categoryOpen = true"></NtIconButton>
                </template>
            </NtMenusTitle>
            <NtScrollbar>
                <NtMenus class="overflow-auto scroll-bar" :menus="category" type="category">
                    <template #append="{ menu }">
                        <NtDropdown :options="[{
            name: '重命名',
            icon: 'edit',
            iconClass: 'stroke-theme',
            split: true
        }, {
            name: '导出PDF',
            iconClass: 'stroke-theme',
            icon: 'pdf'
        }, {
            name: '删除分类',
            iconClass: 'stroke-theme',
            icon: 'trash',
            split: true
        }]">
                            <template #default="{ isOpen }">
                                <NtIconButton icon="more"
                                    :class="['group-hover:opacity-100 opacity-0', isOpen ? 'opacity-100' : 'opacity-0']"
                                    @click="handleCategory(menu)">
                                </NtIconButton>
                            </template>
                        </NtDropdown>
                    </template>
                </NtMenus>
            </NtScrollbar>

            <div class="h-[54px] pl-[18px] pt-[10px] pb-[14px] fixed bottom-0 ">
                <NtIconButton icon="setting2"></NtIconButton>
            </div>
            <div @mousedown="startResize" @mouseup="stopResize"
                class="h-full w-2 cursor-col-resize bg-transparent absolute top-0 bottom-0 right-0 mousedown:bg-theme-40">
            </div>
        </aside>
        <main class="relative flex flex-1 overflow-auto bg-default text-light-7">
            <RouterView></RouterView>
        </main>
        <!-- 新增分类弹窗 -->
        <EditCategoryDialog v-model:open="categoryOpen"></EditCategoryDialog>
    </div>
</template>

<script setup lang="ts">
import { menus, category } from '@/mock'
import { sidebarWidth } from '@/utils'
import { Menu } from "@/models";
const categoryOpen = ref<boolean>(false)

let isResizing = false
let startX = 0
let startWidth = 0

function startResize(event: MouseEvent) {
    isResizing = true
    startX = event.clientX
    startWidth = sidebarWidth.value
    document.addEventListener('mousemove', resize)
    document.addEventListener('mouseup', stopResize)
}

function resize(event: MouseEvent) {
    if (!isResizing) return
    const diffX = event.clientX - startX
    const newWidth = startWidth + diffX
    sidebarWidth.value = Math.max(170, newWidth) // 设置最小宽度为50px
    if (newWidth >= 350) {
        sidebarWidth.value = 350
    }
}

function stopResize() {
    isResizing = false
    document.removeEventListener('mousemove', resize)
    document.removeEventListener('mouseup', stopResize)
}
window.addEventListener('mouseup', stopResize)

function handleCategory(menu: Menu) {
    if (menu.id) {
        console.log(menu.id);

    }
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
