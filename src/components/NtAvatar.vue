<template>
  <Avatar>
    <template #icon>
      <slot> </slot>
    </template>
  </Avatar>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-vue'
</script>
