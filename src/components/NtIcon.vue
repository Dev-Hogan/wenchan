<template>
  <div :class="iconClass">
    <component :is="iconMap[icon]"></component>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/models'
import { iconMap } from '@/utils/icon'
withDefaults(defineProps<{ icon?: Icon; iconClass?: string }>(), {
  icon: 'addTag',
  iconClass: 'stroke-light-4'
})
</script>
