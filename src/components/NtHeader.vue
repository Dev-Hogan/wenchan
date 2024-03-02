<template>
    <header class="flex items-center justify-between px-[28px]  pt-[20px]">
        <div class="text-light-7 text-[28px] font-semibold">{{ title }}</div>
        <div class="flex items-center justify-center space-x-8 [&>svg]:cursor-pointer">
            <slot name="right">
                <NtIcon icon="collapse"></NtIcon>
                <NtIcon icon="addQuestion"></NtIcon>
            </slot>
        </div>
    </header>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        title?: string
    }>(),
    {
        title: undefined
    }
)
</script>
