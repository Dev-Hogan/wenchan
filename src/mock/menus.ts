import { Menu, Routes, MuCategory } from '@/models'
export const menus: Menu[] = [
  {
    title: '全部',
    name: Routes.all,
    icon: 'allQuestion'
  },
  {
    title: '聚焦中',
    name: Routes.focus,
    icon: 'focus'
  },
  {
    title: '待回答',
    name: Routes.waitingAnswer,
    icon: 'answer'
  },
  {
    title: '随机看',
    name: Routes.randomLook,
    icon: 'random'
  },
  {
    title: '标签',
    name: Routes.tags,
    icon: 'tag2'
  },
  {
    title: '废纸篓',
    name: Routes.wastebasket,
    icon: 'trash'
  }
]

export const category: MuCategory[] = [
  {
    title: '新分类',
    icon: 'ask1',
    id: 1000
  },
  {
    title: '英语',
    icon: 'ask2',
    id: 2000
  },
  {
    title: '日记',
    icon: 'ask3',
    id: 3000
  },
  {
    title: '面试题目',
    icon: 'ask4',
    id: 4000
  },
  {
    title: '厨艺',
    icon: 'ask2',
    id: 5000
  },
  {
    title: '剪辑技巧',
    icon: 'ask2',
    id: 6000
  },
  {
    title: 'Figma',
    icon: 'ask1',
    id: 7000
  },
  {
    title: '读书',
    icon: 'ask3',
    id: 8000
  },
  {
    title: '其他',
    icon: 'ask4',
    id: 9000
  }
  // {
  //   title: '剪辑技巧',
  //   icon: 'ask2',
  //   id: 5
  // },
  // {
  //   title: '新分类',
  //   icon: 'ask2',
  //   id: 1
  // },
  // {
  //   title: '英语',
  //   icon: 'ask2',
  //   id: 2
  // },
  // {
  //   title: '日记',
  //   icon: 'ask2',
  //   id: 3
  // },
  // {
  //   title: '面试题目',
  //   icon: 'ask2',
  //   id: 4
  // },
  // {
  //   title: '剪辑技巧',
  //   icon: 'ask2',
  //   id: 5
  // },
  // {
  //   title: '新分类',
  //   icon: 'ask2',
  //   id: 1
  // },
  // {
  //   title: '英语',
  //   icon: 'ask2',
  //   id: 2
  // },
  // {
  //   title: '日记',
  //   icon: 'ask2',
  //   id: 3
  // },
  // {
  //   title: '面试题目',
  //   icon: 'ask2',
  //   id: 4
  // },
  // {
  //   title: '剪辑技巧',
  //   icon: 'ask2',
  //   id: 5
  // },
  // {
  //   title: '新分类',
  //   icon: 'ask2',
  //   id: 1
  // },
  // {
  //   title: '英语',
  //   icon: 'ask2',
  //   id: 2
  // },
  // {
  //   title: '日记',
  //   icon: 'ask2',
  //   id: 3
  // },
  // {
  //   title: '面试题目',
  //   icon: 'ask2',
  //   id: 4
  // },
  // {
  //   title: '剪辑技巧',
  //   icon: 'ask2',
  //   id: 5
  // }
]
