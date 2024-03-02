<template>
    <div :class="['flex items-center border space-x-2 min-h-[28px] text-s',
        'text-light-6 caret-theme border-light-2 hover:border-theme hover:bg-transparent transition-colors duration-75 rounded-4',
        isFocused ? 'border-theme bg-transparent shadow-theme' : '',
        isInput ? 'bg-transparent' : '',
    ]" @focusin="isFocused = true" @focusout="isFocused = false">
        <slot name="prefix"></slot>
        <input :placeholder="placeholder" v-model="modelValue" class="flex-1 outline-none bg-transparent" type="text">
    </div>
</template>

<script setup lang="ts">
const isFocused = ref(false)
const isInput = ref(false)
const modelValue = defineModel<string>()
withDefaults(
    defineProps<{ placeholder?: string }>(), { placeholder: undefined }
)
watchEffect(() => {
    if (modelValue.value) {
        isInput.value  = true
    } else {
        isInput.value = false
    }
})
</script>
