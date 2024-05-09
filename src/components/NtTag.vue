<template>
  <div
    :class="[
      'cursor-pointer text-[15px] text-light-5 py-5 px-4 rounded-3 bg-default font-medium',
      'flex items-center justify-center shrink-0 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.04)]'
    ]"
    @click="emit('activated', props.value)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ value?: number }>(), {
  value: undefined
})

const emit = defineEmits<{
  activated: [value?: number]
}>()
</script>
