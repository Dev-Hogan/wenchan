<template>
  <div
    :class="[
      'flex items-center border space-x-2 pl-3 min-h-[28px] text-s relative',
      'text-light-6 caret-theme border-light-2 hover:border-theme hover:bg-transparent transition-colors duration-75 rounded-4',
      isFocused ? 'border-theme bg-transparent shadow-theme' : '',
      isInput ? 'bg-transparent' : ''
    ]"
    @focusin="isFocused = true"
    @focusout="isFocused = false"
  >
    <div>
      <slot name="prefix"></slot>
    </div>
    <input
      :autocomplete="autoComplete"
      :maxlength="maxLength"
      :placeholder="placeholder"
      v-model="modelValue"
      :class="['flex-1 outline-none bg-transparent', inputClass]"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
const isFocused = ref(false)
const isInput = ref(false)
const modelValue = defineModel<string>()
withDefaults(
  defineProps<{
    placeholder?: string
    inputClass?: string
    hightLight?: boolean
    autoComplete?: 'off'|'on'|'new-password'
    maxLength?: number
  }>(),
  {
    placeholder: undefined,
    inputClass: undefined,
    hightLight: false,
    autoComplete: 'on',
    maxLength: undefined
  }
)
watchEffect(() => {
  if (modelValue.value) {
    isInput.value = true
  } else {
    isInput.value = false
  }
})
</script>
