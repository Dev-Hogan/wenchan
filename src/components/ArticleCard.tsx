import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/utils'
import Link from 'next/link'

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
export function ArticleCard({
  articles,
  className,
  links
}: {
  articles: ArticleCardProps
  className?: string
  links?: Links
}) {
  return (
    <Accordion type="multiple"  className={cn('h-full w-full space-y-m ', className)}>
      {articles.map((a, i) => {
        return (
          <AccordionItem
            className="rounded-[8px] border px-[24px] transition-all hover:border-[#eaeaea] hover:shadow-sm hover:[&>svg]:opacity-100"
            value={`${i}`}
            key={i}
          >
            <AccordionTrigger className="h-[58px] text-light7 hover:no-underline">{a.title}</AccordionTrigger>
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
