<template>
  <header
    :class="['z-10 fixed top-0 right-0 px-[28px] bg-default pt-[20px] left-0']"
    :style="{ left: sidebarWidth + 'px' }"
  >
    <div class="flex-1 flex items-center justify-between">
      <div class="text-light-7 text-[28px] font-semibold">{{ title }}</div>
      <div v-if="!noEdit" class="flex items-center justify-center space-x-8 [&>svg]:cursor-pointer">
        <slot name="edit">
          <NtIcon
            :icon="isFold ? 'fold' : 'unfold'"
            @click="
              () => {
                isFold = !isFold
                emit('toggle', isFold)
              }
            "
          ></NtIcon>
          <NtIcon icon="addQuestion" @click="() => emit('add', true)"></NtIcon>
        </slot>
      </div>
    </div>
    <div class="flex space-x-2">
      <slot></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
import { sidebarWidth } from '@/utils'
withDefaults(
  defineProps<{
    title?: string
    noEdit?: boolean
  }>(),
  {
    title: undefined,
    noEdit: false
  }
)
const isFold = defineModel<boolean>('fold', {
  default: false
})
const emit = defineEmits<{
  add: [val: boolean]
  toggle: [val: boolean]
}>()
</script>
