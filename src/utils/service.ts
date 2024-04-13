// 统计数据格式化
export function formatNumber(val: number | string, precision?: number) {
  if (typeof val === 'number') {
    val = val.toString()
  }
  let ret = '0'
  const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/)
  // Process if illegal number
  if (!cells) {
    ret = val
  } else {
    const negative = cells[1]
    let int = cells[2] || '0'
    let decimal = cells[4] || ''

    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    if (typeof precision === 'number') {
      decimal = decimal.padEnd(precision, '0').slice(0, precision > 0 ? precision : 0)
    }
    ret = negative + int
    if (decimal) {
      decimal = `,${decimal}`
      ret += decimal
    }
  }
  return ret
}
