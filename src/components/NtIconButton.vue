<template>
    <NtButton class="min-h-0 min-w-0 !px-0 !py-0">
        <NtIcon :icon="icon"></NtIcon>
    </NtButton>
</template>

<script setup lang="ts">
import { Icon } from '@/models'
withDefaults(
    defineProps<{ icon?: Icon }>(), { icon: 'addTag' }
)
</script>
