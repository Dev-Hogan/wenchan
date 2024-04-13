<template>
  <Modal v-model:open="open" :title :centered :closable="false" :width="finalWidth">
    <div>
      <slot></slot>
    </div>

    <template #footer>
      <div class="flex items-center justify-end space-x-3 text-[14px] text-light-7">
        <slot name="footer">
          <button @click="open = false">取消</button>
        </slot>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from 'ant-design-vue'
const open = defineModel<boolean>('open', { default: false })
const props = withDefaults(
  defineProps<{
    title?: string
    centered?: boolean
    width?: number
    size?: 'small' | 'default' | 'large'
  }>(),
  { title: undefined, centered: true, width: 270, size: 'small' }
)
const finalWidth = computed(() => {
  if (props.width) {
    return props.width
  }
  switch (props.size) {
    case 'small':
      return 270
    case 'default':
      return 520
    case 'large':
      return 952
    default:
      return undefined
  }
})
</script>
