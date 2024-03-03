<template>
    <header class="z-10 fixed top-0 right-0 left-[--aside-width] px-[28px] bg-default pt-[20px]">

        <div class=" flex-1 flex items-center justify-between ">
            <div class="text-light-7 text-[28px] font-semibold">{{ title }}</div>
            <div v-if="!noEdit" class="flex items-center justify-center space-x-8 [&>svg]:cursor-pointer">
                <slot name="edit">
                    <NtIcon icon="collapse"></NtIcon>
                    <NtIcon icon="addQuestion"></NtIcon>
                </slot>
            </div>
        </div>
        <div class="flex space-x-2">

            <slot></slot>
        </div>
    </header>

</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string
        noEdit?: boolean
    }>(),
    {
        title: undefined,
        noEdit: false
    }
)
</script>
