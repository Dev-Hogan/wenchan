<template>
  <div class="flex w-full h-full">
    <aside
      :style="{ width: sidebarWidth + 'px' }"
      class="relative w-[--aside-width] pt-[48px] pb-[54px] bg-light flex flex-col border-r-[1px]"
    >
      <NtInput class="mx-6 bg-light-2" placeholder="搜索">
        <template #prefix>
          <NtIcon icon="search"></NtIcon>
        </template>
      </NtInput>
      <NtMenusTitle title="概览"></NtMenusTitle>
      <NtMenus :menus="menus"></NtMenus>

      <NtMenusTitle title="分类">
        <template #append>
          <NtTooltip title="新分类">
            <NtIconButton icon="addTag" @click="categoryOpen = true"></NtIconButton>
          </NtTooltip>
        </template>
      </NtMenusTitle>

      <NtScrollbar>
        <NtMenus class="overflow-auto scroll-bar" :menus="categorys" type="category">
          <template #append="{ menu }">
            <NtDropdown
              :options="[
                {
                  name: '重命名',
                  icon: 'edit',
                  iconClass: 'stroke-theme',
                  split: true,
                  action: () => {
                    categoryOpen = true
                    categoryId = menu.id
                  }
                },
                {
                  name: '导出PDF',
                  iconClass: 'stroke-theme',
                  icon: 'pdf'
                },
                {
                  name: '删除分类',
                  iconClass: 'stroke-theme',
                  icon: 'trash',
                  split: true
                }
              ]"
            >
              <template #default="{ isOpen }">
                <NtIconButton
                  icon="more"
                  :class="[
                    'group-hover:opacity-100 opacity-0',
                    isOpen ? 'opacity-100' : 'opacity-0'
                  ]"
                  @click="handleCategory(menu)"
                >
                </NtIconButton>
              </template>
            </NtDropdown>
          </template>
        </NtMenus>
      </NtScrollbar>

      <div class="h-[54px] pl-[18px] pt-[10px] pb-[14px] fixed bottom-0">
        <NtDropdown :show-count="false" overlayClass="p-11 flex flex-1 flex-col">
          <template #overlay>
            <div class="!space-y-5 !py-7">
              <TodayCharts></TodayCharts>
              <div>
                <div class="text-[10px] text-light-6">今天 2024/1/4</div>
                <div class="text-[16px] text-theme font-semibold">1234字符</div>
              </div>
              <div class="space-y-3 font-medium">
                <div
                  class="flex items-center justify-between cursor-pointer min-h-[36px]"
                  v-for="(item, i) in [
                    {
                      name: '数据统计',
                      icon: 'arrowRight',
                      action: () => {
                        $router.push({ name: Routes.statistic })
                      }
                    },
                    {
                      name: '设置',
                      icon: 'arrowRight',
                      action: () => {
                        $router.push({ name: Routes.settings })
                      }
                    }
                  ]"
                  :key="i"
                  @click="item?.action?.()"
                >
                  <div>{{ item.name }}</div>
                  <NtIcon v-if="item.icon" :icon="item.icon as Icon"></NtIcon>
                </div>
              </div>
            </div>
          </template>
          <div class="flex items-center space-x-3">
            <NtAvatar class="w-[30px] h-[30px]">
              <img :src="avatar" />
            </NtAvatar>
            <div class="text-[13px] font-medium">Haaozhang</div>
          </div>
        </NtDropdown>
      </div>
      <div
        @mousedown="startResize"
        @mouseup="stopResize"
        class="h-full w-2 cursor-col-resize bg-transparent absolute top-0 bottom-0 right-0 mousedown:bg-theme-40"
      ></div>
    </aside>
    <main class="relative flex flex-1 overflow-auto bg-default text-light-7">
      <NtScrollbar
        class="flex-1"
        :wrap-class="'flex flex-1 flex-col'"
        :view-class="['flex flex-1 flex-col']"
      >
        <RouterView></RouterView>
      </NtScrollbar>
    </main>
    <!-- 新增分类弹窗 -->
    <EditCategoryDialog
      v-model:open="categoryOpen"
      v-model:id="categoryId"
      :when-save="getAllCategories"
    ></EditCategoryDialog>
  </div>
</template>

<script setup lang="ts">
import { getAllStore } from '@/service/controller'
import { Tables } from '@/service/model'
import { menus, category } from '@/mock'
import { sidebarWidth, useEcharts } from '@/utils'
import { Menu, Icon, Routes, Category } from '@/models'
import avatar from '@/assets/avatar.png'
const categoryOpen = ref<boolean>(false)
const categoryId = ref<number>()

let isResizing = false
let startX = 0
let startWidth = 0

function startResize(event: MouseEvent) {
  isResizing = true
  startX = event.clientX
  startWidth = sidebarWidth.value
  document.addEventListener('mousemove', resize)
  document.addEventListener('mouseup', stopResize)
}

function resize(event: MouseEvent) {
  if (!isResizing) return
  const diffX = event.clientX - startX
  const newWidth = startWidth + diffX
  sidebarWidth.value = Math.max(170, newWidth) // 设置最小宽度为50px
  if (newWidth >= 350) {
    sidebarWidth.value = 350
  }
}

function stopResize() {
  isResizing = false
  document.removeEventListener('mousemove', resize)
  document.removeEventListener('mouseup', stopResize)
}
window.addEventListener('mouseup', stopResize)

function handleCategory(menu: Menu) {
  if (menu.id) {
    console.log(menu.id)
  }
}
const categorys = ref(category)

async function getAllCategories() {
  const ret = await getAllStore<Category>(Tables.category)
  console.log(ret)
  categorys.value = [...categorys.value, ...ret]
  console.log(categorys.value)
}
getAllCategories()

const { NtChart: TodayCharts } = useEcharts({
  height: '60px',
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: (val: any) => {
        const data = val?.[0]
        return (
          `<span class="text-[14px] text-light-6">${data?.name}<span>` +
          '<br>' +
          `<div class="text-theme text-[15px] font-semibold">${data?.value}字符</div>`
        )
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: 0,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        show: false,
        data: ['2024/1/1', '2024/1/2', '2024/1/3', '2024/1/4', '2024/1/4', '2024/1/5', '2024/1/6'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '字符',
        type: 'bar',
        barWidth: '60%',
        data: [
          10,
          52,
          200,
          {
            value: -10,
            itemStyle: {
              color: '#EAEAEA'
            }
          },
          390,
          330,
          220
        ],

        emphasis: {
          label: {},
          itemStyle: {
            color: '#FF800A'
          }
        },
        itemStyle: {
          borderRadius: 5
        }
      }
    ]
  }
})
</script>

<!-- <style scoped>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
    /*轨道阴影*/
    border-radius: 0px;
    /*轨道背景区域的圆角*/
    background-color: transparent;
    /*轨道的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 2px;
    /*滑块圆角*/
    -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    /*滑块外阴影*/
    background-color: rgba(136, 219, 255, 1);
    /*滑块背景颜色*/
}
</style> -->
