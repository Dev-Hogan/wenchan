<template>
    <div :class="['cursor-pointer text-light-6 min-w-[40px] py-7 px-4 rounded-3 bg-light font-medium',
        'flex items-center justify-center',
        isActivated ? 'bg-theme-15 text-theme' : '']" @click="toggle">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{ value?: number }>(), {
    value: undefined
}
)
const isActivated = ref(false)
function toggle() {
    if (isActivated.value) {
        isActivated.value = false
    } else {
        isActivated.value = true
    }
}
const emit = defineEmits<{
    activated: [value?: number]
}>()
watchEffect(() => {
    if (isActivated.value) {
        emit('activated', props.value)
    }
})
</script>
