<template>
  <NtHeader :title="`${query.title || ''}`">
    <NtTagGroup v-model="currenTagId"></NtTagGroup>
  </NtHeader>
  <NtContent class="!mt-[--content-top]">
    分类{{ $route.params.categoryId }}
    <div>{{ currenTagId }}</div>
    <div v-for="i in 6" @click="currenTagId = i" :key="i">{{ i }}</div>
  </NtContent>
</template>

<script setup lang="ts">
import { useNumberSessionRef } from '@/utils'
import router from '@/router'
const currentRouter = router.currentRoute
const query = computed(() => currentRouter.value.query)

const currenTagId = useNumberSessionRef(`${currentRouter.value.query.categoryId}-tagId`)
</script>
