<template>
  <NtButton
    class="min-h-0 min-w-0 !px-0 !py-0 flex items-center hover:bg-iconsel transition-colors"
  >
    <NtIcon :icon="icon"></NtIcon>
    <slot></slot>
  </NtButton>
</template>

<script setup lang="ts">
import { Icon } from '@/models'
withDefaults(defineProps<{ icon?: Icon }>(), { icon: 'addTag' })
</script>
