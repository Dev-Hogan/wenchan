<template>
  <NtHeader title="数据统计" no-edit></NtHeader>
  <NtContent content-class="space-y-20 mb-[24px]">
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
  height: '160px',
  option: {
    tooltip: {
      formatter: (val: any) => {
        return (
          `<span class="text-[14px] text-light-6">${val?.data?.[0]}<span>` +
          '<br>' +
          `<div class="text-theme text-[15px] font-semibold">${val?.data?.[1]}字符</div>`
        )
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 400,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 0,
      pieces: [
        // 自定义每一段的范围，以及每一段的文字
        { gte: 150, color: '#FFAC0A' }, // 不指定 max，表示 max 为无限大（Infinity）。
        { gte: 100, lte: 150, color: '#FFD990' },
        { lte: 100, color: '#FAFAFA' }
      ]
    },

    calendar: {
      top: 50,
      left: 0,
      right: 0,
      // bottom: 30,
      cellSize: [15, 15],
      monthLabel: {
        nameMap: 'ZH'
      },
      dayLabel: {
        padding: 10
      },
      range: '2023',
      itemStyle: {
        borderWidth: 2,
        borderColor: 'transparent'
      },
      splitLine: {
        show: false
      },
      yearLabel: { show: true }
    },

    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData('2023'),
      itemStyle: {
        borderRadius: 4
      }
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
      echarts.time.format(time, '{yyyy}/{MM}/{dd}', false),
      Math.floor(Math.random() * 200)
    ])
  }
  return data
}

const { NtChart: Chats } = useEcharts({
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

const { NtChart: Questions } = useEcharts({
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
        name: '问题',
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
<style scoped>
._title {
  @apply text-light-7 text-[20px] font-semibold;
}
._explain {
  @apply text-light-4 text-[13px];
}
</style>
