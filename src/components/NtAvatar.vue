<template>
  <Avatar :shape>
    <template #icon>
      <slot> <img :src /> </slot>
    </template>
  </Avatar>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-vue'
import avatar from '@/assets/avatar.png'
withDefaults(
  defineProps<{
    src?: string
    shape?: 'circle' | 'square'
  }>(),
  {
    src: avatar,
    shape: 'circle'
  }
)
</script>
