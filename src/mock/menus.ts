import { Menu, Routes } from '@/models'
export const menus: Menu[] = [
  {
    title: '全部',
    name: Routes.all
  },
  {
    title: '聚焦中',
    name: Routes.focus
  },
  {
    title: '待回答',
    name: Routes.waitingAnswer
  },
  {
    title: '随机看',
    name: Routes.randomLook
  },
  {
    title: '标签',
    name: Routes.tags
  },
  {
    title: '废纸篓',
    name: Routes.wastebasket
  }
]
