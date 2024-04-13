<template>
  <div>{{ count }}</div>
  <button @click="count++">+1</button>
</template>

<script setup lang="ts">
const count = defineModel<number>('count',{ default: 0 })
</script>
