'use client'
import { Input, Nav, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, type NavProps } from '@/components'
import '@/style/globals.css'

import { AArrowDownIcon, PlusCircle, Search } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const links: NavProps['links'] = [
  {
    title: '全部',
    href: '/',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '聚焦中',
    href: '/focus',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '待回答',
    href: '/waitingAnswer',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '随机看',
    href: '/randomLook',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '废纸篓',
    href: '/wastebasket',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '辅助开发工具',
    href: '/dev',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  }
]

// 应该从接口获取
const tags: NavProps['links'] = [
  {
    title: '学SwiftUI',
    href: '/content/1',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '英语',
    href: '/content/2',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '法语',
    href: '/content/3',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '其他学习',
    href: '/content/5',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '时间印迹',
    href: '/content/6',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '共享闹钟',
    href: '/content/7',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  },
  {
    title: '其他',
    href: '/content/00',
    icon: AArrowDownIcon,
    variant: 'default' as 'default' | 'ghost'
  }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-[100vh] flex-1 ">
          <TooltipProvider>
            <div className="h-full w-[260px] space-y-[12px] border-r bg-light1 px-[16px]">
              <div className="space-y-[8px]">
                <div className="relative h-[78px]">
                  <Input placeholder="搜索" prefix={<Search size={16} />} className="absolute bottom-[2px]"></Input>
                </div>
                <div className="font-[12px] text-[#666666]">概览</div>
                <Nav links={links} isCollapsed={false}></Nav>
              </div>
              <div className="flex flex-1 items-center justify-between pr-[12px] font-[12px]">
                <div className="font-[12px] text-[#666666]">分类</div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className='hover:bg-light2 w-[24px] h-[24px] rounded-[5px] flex flex-col items-center justify-center transition-colors' >
                      <PlusCircle className="cursor-pointer" size={16}></PlusCircle>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-light6">
                    <div className="text-[13px] font-medium">新分类</div>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Nav links={tags} isCollapsed={false}></Nav>
            </div>
          </TooltipProvider>
          <div className="flex flex-col flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
