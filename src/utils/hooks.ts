import type { EChartsOption } from 'echarts'
import Chart from '@/components/NtChart/Chart.vue'
type Option = {
  width?: string
  height?: string
  option: EChartsOption
}
export function useEcharts(option: Option) {
  const color = '#FFAC0A'
  const mergeOption = { color, ...option.option }
  const NtChart = defineComponent({
    name: 'NtChart',
    render() {
      return h(Chart, {
        width: option?.width,
        height: option?.height,
        option: mergeOption
      })
    }
  })
  return { NtChart }
}
