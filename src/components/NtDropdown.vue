<template>
    <Dropdown @open-change="d => {
        isOpen = d
    }">
        <template #default>
            <div v-if="$slots.default">

                <slot name="default" v-bind="{ isOpen }"></slot>
            </div>
        </template>
        <template #overlay>
            <div :class="['w-[158px] min-h-[170px] rounded-5 border-[0.5px] bg-default p-3']">
                <slot name="overlay">
                    <div v-for="(item, i) in options" :key="i" :class="[
        'flex items-center space-x-2 space-y-2  text-light-7 font-medium text-[14px] min-h-[36px]',
    ]">
                        <div :class="['flex flex-1 items-center transition-colors px-4 space-x-2 min-h-[32px] hover:bg-light-2 rounded-3 hover:cursor-pointer',
        item.class ? item.class : '']">

                            <NtIcon v-if="item.icon" :icon="item.icon"
                                :class="['', item.iconClass ? item.iconClass : '']">
                            </NtIcon>
                            <div>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </slot>
                <slot name="overlayAppend">
                    <div class="text-light-4 text-[12px] space-x-2 px-5">
                        <span>卡片</span><span>:</span><span>775</span>
                    </div>
                </slot>
            </div>
        </template>

    </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown } from "ant-design-vue";
import { Icon } from "@/models";
type Option = {
    name?: string
    icon?: Icon
    class?: string
    iconClass?: string
}
withDefaults(
    defineProps<{
        options?: Option[]
    }>(), {
    options: () => []
}
)
const isOpen = ref(false)
</script>
