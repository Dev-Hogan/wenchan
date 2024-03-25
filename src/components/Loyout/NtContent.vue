<template>
    <section class="flex flex-col mx-auto w-[--banner-width] mt-[62px] overflow-auto">
        <NtScrollbar class="mx-[28px]" :view-class="contentClass">
            <slot></slot>

        </NtScrollbar>
    </section>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        contentClass?: string
    }>(), {
    contentClass: undefined
}
)
</script>
