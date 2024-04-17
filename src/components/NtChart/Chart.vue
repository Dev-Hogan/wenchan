<template>
  <div
    ref="echartRef"
    :style="{
      width: width,
      height: height
    }"
  ></div>
</template>

<script setup lang="ts">
import echarts from '@/utils/lib/echart'
import type { EChartsOption } from 'echarts'
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '300px'
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

onUnmounted(() => {
  chartInstance?.dispose()
})
</script>
