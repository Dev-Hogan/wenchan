<template>
  <button
    :disabled
    :class="[
      'rounded-2 px-[23px] py-3 font-medium text-light-7 text-[14px]',
      type === 'primary' ? 'bg-theme text-white' : ''
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: 'default' | 'primary'; disabled?: boolean }>(), {
  type: 'default',
  disabled: false
})
</script>
