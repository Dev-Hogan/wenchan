<template>
  <NtHeader title="数据统计" no-edit></NtHeader>
  <NtContent content-class="space-y-20">
    <div class="flex space-x-3 [&>div]:flex-1">
      <NtStatistic
        v-for="item in statistics"
        :key="item.title"
        :title="item.title"
        :number="item.number"
      ></NtStatistic>
    </div>
    <div class="flex [&>div]:flex-1">
      <div>
        <div class="text-light-7 text-[20px] font-semibold">字符变化</div>
        <div class="text-light-4 text-[13px]">仅有字数变化的天才会显示</div>
      </div>
      <div>
        <div class="text-light-7 text-[20px] font-semibold">问题新增</div>
        <div class="text-light-4 text-[13px]">每月按提出问题个数统计</div>
      </div>
    </div>
  </NtContent>
</template>

<script setup lang="ts">
const statistics = [
  {
    title: '总字符',
    number: 1000.34
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
