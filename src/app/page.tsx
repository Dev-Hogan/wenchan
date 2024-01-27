'use client'
import { ArticleCard, Head, PageContainer } from '@/components'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
import { cn } from '@/utils/utils'
import { Trash, SquarePen, LogIn } from 'lucide-react'
import { useLocalStorageState } from 'ahooks'
import { articles } from './data'
const tags: { name: string; href: string }[] = [
  {
    name: '所有内容',
    href: '#'
  },
  {
    name: '无标签',
    href: '#'
  },
  {
    name: '基础知识',
    href: '#'
  },
  {
    name: '上架内容',
    href: '#'
  }
]
const rightClickMenus = [
  {
    icon: LogIn,
    name: '前往该标签'
  },
  {
    icon: SquarePen,
    name: '重命名'
  },
  {
    icon: Trash,
    name: '删除标签'
  }
]
export default function All() {
  const [activeTag, setActiveTag] = useLocalStorageState('tag-name', {
    defaultValue: ''
  })
  return (
    <main className="flex flex-col flex-1 s-full">
      <Head></Head>
      <PageContainer>
        <div className="relative h-full">
          <div className="absolute top-[6px] flex gap-[6px]">
            {tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setActiveTag(tag.name)}
                  className={cn(
                    'text-light5 cursor-pointer rounded-[6px]  shrink-0 bg-light1 px-[10px] py-[5px] text-[13px] font-medium transition-colors',
                    activeTag === tag.name ? 'bg-t15 text-primary ' : ''
                  )}
                >
                  <ContextMenu>
                    <ContextMenuTrigger> {tag.name}</ContextMenuTrigger>
                    <ContextMenuContent className='p-0 w-[158px]'>
                      {rightClickMenus.map((m, i) => {
                        return (
                          <ContextMenuItem
                            key={i}
                            className="h-[36px] cursor-pointer space-x-[12px] pl-[16px] first:border-b"
                          >
                            <m.icon size={16} className="text-primary"></m.icon>
                            <div>{m.name}</div>
                          </ContextMenuItem>
                        )
                      })}
                      <div className='space-x-[8px] text-light4 border-t h-[46px] text-[12px] px-[16px] flex  items-center'>
                        <span>卡片</span><span>:</span> <span>32</span>
                      </div>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
              )
            })}
          </div>
          <ArticleCard articles={articles} className="mt-[56px] h-full"></ArticleCard>
        </div>
      </PageContainer>
    </main>
  )
}
