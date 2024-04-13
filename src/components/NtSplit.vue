<template>
  <div :class="['w-full h-[1px]  overflow-hidden', hide ? 'bg-light-2' : 'bg-transparent']"></div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ hide?: boolean }>(), { hide: false })
</script>
