'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/utils/utils'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Goal, Link as IconLink, Maximize2, Share, SquarePen, Trash2, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export type ArticleCardProps = {
  title?: string
  content?: {
    link?: Links
    article?: string
  }
}[]
export type Links = {
  href?: string
  name?: string
}[]
type menu = {
  icon: LucideIcon
  name: string
}[]
const cardMenus: menu = [
  {
    icon: Goal,
    name: '取消聚焦'
  },
  {
    icon: SquarePen,
    name: '编辑'
  },
  {
    icon: IconLink,
    name: '标签'
  },
  {
    icon: Maximize2,
    name: '全屏'
  },
  {
    icon: Share,
    name: '分享'
  },
  {
    icon: Trash2,
    name: '删除'
  }
]
export function ArticleCard({
  articles,
  className,
  links
}: {
  articles: ArticleCardProps
  className?: string
  links?: Links
}) {
  const end = cardMenus.length - 1
  const [focus, setFocus] = useState(articles.map(() => false))
  const [iconFocus, setIconFocus] = useState(articles.map(() => false))
  return (
    <Accordion type="multiple" className={cn('h-full max-w-[750px] space-y-[8px] overflow-hidden ', className)}>
      {articles.map((a, i) => {
        return (
          <AccordionItem
            className={cn(
              'rounded-[8px] px-[24px]  transition-all hover:border hover:shadow-md',
              focus[i] || iconFocus[i] ? 'border shadow-md' : ''
            )}
            value={`${i}`}
            key={i}
          >
            <AccordionTrigger
              onClick={() => setFocus(focus.map((d, idx) => (idx === i ? !d : d)))}
              className="text-light7 group h-[58px] w-[750px] hover:no-underline [&[data-state=open]>svg]:opacity-100"
            >
              {a.title}
              <DropdownMenu onOpenChange={open => setIconFocus(iconFocus.map((d, idx) => (idx === i ? open : d)))}>
                <DropdownMenuTrigger asChild>
                  <DotsHorizontalIcon
                    className={cn(
                      'h-4 w-4 shrink-0 opacity-0 transition-transform duration-200 group-hover:opacity-100 ',
                      iconFocus[i] ? 'opacity-100' : ''
                    )}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[158px] cursor-pointer">
                  <DropdownMenuGroup>
                    {cardMenus.map((m, i) => {
                      return (
                        <>
                          <DropdownMenuItem className="cursor-pointer space-x-3" key={i}>
                            <m.icon size={16} className="text-primary"></m.icon> <div>{m.name}</div>
                          </DropdownMenuItem>
                          {i === 0 || i % 2 === 0 || i === end ? <DropdownMenuSeparator /> : undefined}
                        </>
                      )
                    })}
                    <DropdownMenuLabel className="flex space-x-2 text-[12px] font-normal text-light4">
                      <span>卡片</span>
                      <span>:</span> <span>32</span>
                    </DropdownMenuLabel>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-[14px] font-normal">{a.content?.article}</div>
              <div className="py-3">
                {a.content?.link?.map((l, i) => {
                  return (
                    <Link href={l.href || '#'} key={i} className="space-x-[2px]  text-[#84A4B6]">
                      <span>#</span>
                      <span>{l.name}</span>
                    </Link>
                  )
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
