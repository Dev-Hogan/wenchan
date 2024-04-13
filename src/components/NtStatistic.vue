<template>
  <div>
    <div v-if="title">{{ title }}</div>
    <div>{{ formatNumber(1200000000000) }}</div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/utils'
withDefaults(
  defineProps<{
    title?: string
    number?: number | string
  }>(),
  {
    title: undefined,
    number: 0
  }
)
</script>
