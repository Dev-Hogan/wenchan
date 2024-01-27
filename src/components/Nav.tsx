'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components'
import { cn } from '@/lib/utils'
import { useLocalStorageState } from 'ahooks'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export interface NavProps {
  isCollapsed?: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon
    href?: string
    variant: 'default' | 'ghost'
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  const [activeIndex, setActiveIndex] = useLocalStorageState<string | undefined>('local-menus', {
    defaultValue: 'undefined'
  })
  return (
    <div data-collapsed={isCollapsed} className="flex flex-col gap-4 group">
      <nav className="grid gap-[4px]">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link href={link.href || '#'} className={'h-9 w-9'}>
                  {/* <link.icon className="w-4 h-4" /> */}
                  <span>{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && <span className="ml-auto">{link.label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href || '#'}
              onClick={() => setActiveIndex(link.title)}
              className={cn(
                activeIndex === link.title ? 'bg-[#eaeaea]' : '',
                'flex flex-1 items-center rounded-md py-[8px] pl-[8px] hover:bg-[#eaeaea] transition-colors'
              )}
            >
              <link.icon className="w-4 h-4 mr-2" />
              <div>{link.title}</div>
              <div>
                {link.label && (
                  <span className={cn('ml-auto', link.variant === 'default' && 'text-background dark:text-white')}>
                    {link.label}
                  </span>
                )}
              </div>
            </Link>
          )
        )}
      </nav>
    </div>
  )
}
