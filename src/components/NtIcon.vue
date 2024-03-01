<template>
    <component :is="iconMap[icon]"></component>
</template>

<script setup lang="ts">
import { Icon } from '@/models';
import { iconMap } from '@/utils/icon';
withDefaults(defineProps<{ icon?: Icon }>(), { icon: 'addTag' })

</script>
