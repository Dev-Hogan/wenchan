<template>
  <div class="flex space-x-4">
    <div>{{ count }}</div>
    <button @click="count++">+1</button>
  </div>
</template>

<script setup lang="ts">
const count = defineModel<number>('count', { default: 0 })
</script>
