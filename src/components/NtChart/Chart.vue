<template>
  <div
    ref="echartRef"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  ></div>
</template>

<script setup lang="ts">
import echarts from '@/utils/lib/echart'
import type { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    width?: number
    height?: number
    option: EChartsOption
  }>(),
  {
    width: 300,
    height: 300
  }
)

const echartRef = ref<HTMLElement>()
let chartInstance: echarts.ECharts | null = null
onMounted(() => {
  if (unref(echartRef)) {
    chartInstance = echarts.init(echartRef.value)
  } else {
    console.error('还没有实例')
    return
  }
  // 绘制图表
  if (props.option) chartInstance.setOption(props.option)
})
</script>
