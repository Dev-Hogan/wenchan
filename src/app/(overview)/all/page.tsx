'use client'
import { ArticleCard, Head, PageContainer } from '@/components'
import { cn } from '@/utils/utils'
import { useLocalStorageState } from 'ahooks'
import { articles } from '../../data'
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
export default function All() {
  const [activeTag, setActiveTag] = useLocalStorageState('tag-name', {
    defaultValue: ''
  })
  return (
    <main className="s-full flex flex-1 flex-col">
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
                    'text-light5 cursor-pointer rounded-[6px] border bg-default px-[10px] py-[5px] text-[13px] font-medium transition-colors',
                    activeTag === tag.name ? 'bg-t15 text-primary' : ''
                  )}
                >
                  {tag.name}
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
