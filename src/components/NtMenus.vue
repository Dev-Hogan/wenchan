<template>
    <menu>
        <li v-for="menu in menus" :key="menu.id" :class="['flex  h-[34px] items-center space-x-3 mx-6 my-1 py-3 px-4 rounded-3'
            , menu.name === currentRoute.name ? 'bg-light-2' : 'bg-transparent',
            'cursor-pointer hover:bg-light-2',
            'transition-colors']" @click="navigator(menu)">
            <div class="text-light-4">icon</div>
            <div class="text-[13px] text-light-7 font-medium">
                {{ menu.title }}
            </div>
        </li>
    </menu>
</template>

<script setup lang="ts">
import { Menu } from '@/models';
import router from '@/router';
const currentRoute = router.currentRoute
withDefaults(
    defineProps<{ menus?: Menu[] }>(), { menus: undefined }
)
// console.log(router.getRoutes());


function navigator(menu: Menu) {
    if (menu.name === currentRoute.value.name) {
        console.warn('Already on this page')
        return
    } else {
        try {
            router.push({ name: menu.name })
        } catch (error) {
            alert(`【${menu.title}】页面尚未配置`)
        }
    }
}

watchEffect(() => {
    console.log('currentRoute', currentRoute.value);
})
</script>
