<template>
  <NtHeader title="全部">
    <NtTag
      v-for="tag in tagList"
      :key="tag.id"
      :value="tag.id"
      @activated="
        (d) => {
          console.log(d, '激活')
        }
      "
    >
      <NtDropdown
        :trigger="'contextmenu'"
        :options="[
          {
            name: '前往该标签',
            icon: 'tagTheme',
            split: true
          },
          {
            name: '重命名',
            icon: 'editTheme'
          },
          {
            name: '删除标签',
            icon: 'trashTheme',
            split: true
          }
        ]"
      >
        {{ tag.name }}
      </NtDropdown>
    </NtTag>
  </NtHeader>
  <NtContent class="!mt-[120px]" content-class="space-y-5">
    <!-- <NtCard v-for="i in 5" :key="i"></NtCard> -->
    <NtEditorCard v-for="i in 5" :key="i"></NtEditorCard>
  </NtContent>
</template>

<script setup lang="ts">
// const text = ref('')
type Tag = {
  link?: string
  name?: string
  id?: number
}
const tagList = ref<Tag[]>([
  {
    name: '所有内容',
    id: Math.random()
  },
  {
    name: '基础知识',
    id: Math.random()
  },
  {
    name: '进阶内容',
    id: Math.random()
  }
])
// categoryStore.open().then(() => {
//   categoryStore.category.add({ name: '分类2' }).then((id) => {
//     console.log(id, '数据id')
//   })

//   categoryStore.category.get(1).then((val) => {
//     console.log(val, '值')
//   })
// })
</script>
