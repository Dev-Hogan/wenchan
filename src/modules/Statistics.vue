<template>
  <NtHeader title="数据统计" no-edit></NtHeader>
  <NtContent>
    <div class="flex space-x-3 [&>div]:flex-1">
      <NtStatistic
        v-for="item in statistics"
        :key="item.title"
        :title="item.title"
        :number="item.number"
      ></NtStatistic>
    </div>
  </NtContent>
</template>

<script setup lang="ts">
const statistics = [
  {
    title: '总字符',
    number: 1000
  },
  {
    title: '问题',
    number: 1000
  },
  {
    title: '分类',
    number: 1000
  },
  {
    title: '标签',
    number: 1000
  }
]
</script>
