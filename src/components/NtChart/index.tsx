import type { EChartsOption } from 'echarts'
import Chart from './Chart.vue'
type Option = {
  width?: number
  height?: number
  option?: EChartsOption
}
export function useEcharts(option?: Option) {
  const NtChart = defineComponent({
    name: 'NtChart',
    render() {
      return h(Chart, option)
    }
  })
  return { NtChart }
}
