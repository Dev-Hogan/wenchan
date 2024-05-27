/**近日字符 */
export async function getDayChar() {
  return 1
}
/** 近日问题*/
export async function getDayQuestion() {
  return 1
}

/**获取用户信息,头像等 */
export async function getAccount() {
  return 1
}

/**全局搜索 */
export async function searchAllNotesByName(name?: string) {
  return name
}

/**获取总字符、问题、分类、标签 */
type Statistics = {
  name: string
  count: number
}
export async function getStatistics() {
  const chars: Statistics = {
    name: '总字符',
    count: 1000
  }
  const question: Statistics = {
    name: '问题',
    count: 1000
  }
  const category: Statistics = {
    name: '分类',
    count: 1000
  }
  const tag: Statistics = {
    name: '标签',
    count: 1000
  }
  return [chars, question, category, tag]
}

/** 字符变化*/
export async function charsDayChange() {
  return [10, 52, 200, -10, 390, 330, 220]
}

/**问题变化 */

/**字数日历统计 */
