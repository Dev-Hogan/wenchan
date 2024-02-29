<template>
    <div class="flex items-center justify-between h-[48px] px-8 py-7 pb-2  text-light-5 font-medium text-[11px]">

        <slot name="title">
            <div>{{ title }}</div>
        </slot>
        <slot name="append"></slot>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{ title?: string }>(), { title: undefined }
)
</script>
