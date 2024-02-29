import { Menu, Routes } from '@/models'
import { icons } from 'ant-design-vue/es/image/PreviewGroup'
export const menus: Menu[] = [
  {
    title: '全部',
    name: Routes.all,
    icon: 'add-tag'
  },
  {
    title: '聚焦中',
    name: Routes.focus,
    icon: 'add-tag'
  },
  {
    title: '待回答',
    name: Routes.waitingAnswer,
    icon: 'add-tag'
  },
  {
    title: '随机看',
    name: Routes.randomLook,
    icon: 'add-tag'
  },
  {
    title: '标签',
    name: Routes.tags,
    icon: 'add-tag'
  },
  {
    title: '废纸篓',
    name: Routes.wastebasket,
    icon: 'add-tag'
  }
]
