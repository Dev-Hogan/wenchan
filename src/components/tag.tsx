import { cn } from '@/lib/utils'
export function Tag({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <>
      <div
        className={cn(
          ' w-min-[20px]  overflow-hidden rounded-lg px-[8px] py-[4px] font-[500] shrink-0',
          active ? 'bg-[#fff9ec] text-[#ffac0a]' : 'bg-[#fafafa]'
        )}
      >
        {text}
      </div>
    </>
  )
}
