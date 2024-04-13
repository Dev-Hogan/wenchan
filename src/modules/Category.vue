<template>
  <NtHeader :title="`${query.title || ''}`"></NtHeader>
  <NtContent> 分类{{ $route.params.categoryId }} </NtContent>
</template>

<script setup lang="ts">
import router from '@/router'
const currentRouter = router.currentRoute
const query = computed(() => currentRouter.value.query)
</script>
