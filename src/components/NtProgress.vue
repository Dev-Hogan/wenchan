<template>
  <Progress
    :showInfo="false"
    :percent
    :size="size"
    :stroke-color="ThemeColor.light"
    trailColor="#FAFAFA"
  >
  </Progress>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-vue'
import { ThemeColor } from '@/models'
const percent = defineModel<number>('percent', { default: 20 })
const size = defineModel<number>('size', { default: 11 })
</script>
