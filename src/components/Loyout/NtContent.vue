<template>
  <section
    :class="[
      'flex flex-col flex-1 mx-auto w-[--banner-width] mt-[62px] overflow-auto',
      contentClass
    ]"
  >
    <!-- <NtScrollbar
      class="flex flex-col"
      :wrap-class="'flex flex-1 flex-col'"
      :view-class="[contentClass, 'flex flex-1 flex-col']"
    >
      <slot></slot>
    </NtScrollbar> -->
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    contentClass?: string
  }>(),
  {
    contentClass: undefined
  }
)
</script>
