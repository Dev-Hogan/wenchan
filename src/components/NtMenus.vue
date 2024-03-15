<template>
    <menu>
        <li v-for="menu in menus" :key="menu.id" :class="['flex  h-[34px] items-center  mx-6 my-1 py-3 px-4 rounded-3 justify-between',
            activeMenuClass(menu),
            'cursor-pointer hover:bg-light-2',
            isHover ? 'bg-light-2' : '',
            'transition-colors group']" @click="navigator(menu)">
            <div class="flex items-center space-x-1">

                <NtIcon class="text-light-4" :icon="menu.icon"></NtIcon>
                <div class="text-[13px] text-light-7 font-medium">
                    {{ menu.title }}
                </div>
            </div>

            <div v-if="$slots.append">

                <slot name="append" v-bind="{
            menu,
            id: menu.id,
            isHover
        }">
                </slot>
            </div>

        </li>
    </menu>
</template>

<script setup lang="ts">
import { Menu, Routes } from '@/models';
import router from '@/router';
import { message } from 'ant-design-vue';
const currentRoute = router.currentRoute
const props = withDefaults(
    defineProps<{ menus?: Menu[]; type?: 'menu' | 'category' }>(), { menus: undefined, type: 'menu' }
)

const isCategory = props.type === 'category'
if (!isCategory) {

    // 实际上只针对home处理即可
    if (currentRoute.value.name === Routes.home) {
        router.replace({
            name: Routes.all, query: {
                title: props!.menus![0].title,
            }
        })
    }
}


function activeMenuClass(menu: Menu) {

    if (isCategory) {
        return (+currentRoute.value.params.categoryId || 0) === menu.id ? 'bg-light-2' : ''
    } else {
        return menu.name === currentRoute.value.name ? 'bg-light-2' : ''
    }
}



function navigator(menu: Menu) {
    if (!isCategory) {
        handleMenuNavigator(menu)
    } else {
        handleCategoryNavigator(menu)

    }
}

function handleMenuNavigator(menu: Menu) {
    if (menu.name === currentRoute.value.name) {
        console.warn('Already on this page')
    } else {
        try {
            router.push({
                name: menu.name,
                query: {
                    title: menu.title,
                }
            })
        } catch (error) {
            message.warn(`【${menu.title}】页面尚未配置`)
        }
    }
}

function handleCategoryNavigator(category: Menu) {

    if (category.id) {
        if ((+currentRoute.value.params.categoryId || 0) === category.id) {
            console.warn('Already on this page')
        } else {

            router.push({
                name: Routes.category,
                params: { categoryId: category.id },
                query: {
                    title: category.title,
                }
            })
        }
    }
}


const isHover = ref(false)

</script>
