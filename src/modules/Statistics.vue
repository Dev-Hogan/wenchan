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
        <div class="_title">字符变化</div>
        <div class="_explain">仅有字数变化的天才会显示</div>
        <Chats></Chats>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <div>
            <div class="_title">问题新增</div>
            <div class="_explain">每月按提出问题个数统计</div>
          </div>
          <div class="flex items-center">
            <span><NtIconButton icon="arrowLeft"></NtIconButton></span>
            <span>2024年</span>
            <span><NtIconButton icon="arrowRight"></NtIconButton></span>
          </div>
        </div>
        <Questions></Questions>
      </div>
    </div>
    <div>
      <div class="text-[16px] font-medium text-light-7">有记录</div>
      <div class="_title">3234天</div>
      <Records></Records>
    </div>
    <div>
      <div class="_title">其他信息</div>
      <div class="_explain">加入问禅2345天，2023年6月23日</div>
    </div>
  </NtContent>
</template>

<script setup lang="ts">
import { useEcharts } from '@/utils'
import echarts from '@/utils/lib/echart'
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

const { NtChart: Records } = useEcharts({
  option: {
    title: {
      top: 30,
      left: 'center',
      text: 'Daily Step Count'
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2016',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData('2016')
    }
  }
})
function getVirtualData(year: string) {
  const date = +echarts.time.parse(year + '-01-01')
  const end = +echarts.time.parse(+year + 1 + '-01-01')
  const dayTime = 3600 * 24 * 1000
  const data: [string, number][] = []
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ])
  }
  return data
}

const { NtChart: Chats } = useEcharts({
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, -10, 390, 330, 220]
      }
    ]
  }
})

const { NtChart: Questions } = useEcharts({
  option: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, -10, 390, 330, 220]
      }
    ]
  }
})
</script>
<style scoped>
._title {
  @apply text-light-7 text-[20px] font-semibold;
}
._explain {
  @apply text-light-4 text-[13px];
}
</style>
