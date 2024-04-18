<template>
  <div class="flex flex-col bg-light p-9 rounded-4">
    <div v-if="title" :class="[titleClass ? titleClass : '','text-light-5 font-medium']">{{ title }}</div>
    <div :class="[numberClass ? numberClass : '','text-light-7 font-[860] text-[22px]']">{{ formatNumber(number) }}</div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/utils'
withDefaults(
  defineProps<{
    title?: string
    number?: number | string
    titleClass?: string
    numberClass?: string
  }>(),
  {
    title: undefined,
    number: 0,
    titleClass: '',
    numberClass: ''
  }
)
</script>
