'use client'
import { Head } from '@/components'
import { Card, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
export default function Focus() {
  const list: { content: string }[] = [
    {
      content: '系统过渡效果如何组合在一起？以及如何做出出现和消失不同的动画？'
    },
    {
      content: '系统过渡效果如何组合在一起？以及如何做出出现和消失不同的动画？'
    },
    {
      content: '系统过渡效果如何组合在一起？以及如何做出出现和消失不同的动画？'
    },
    {
      content: '系统过渡效果如何组合在一起？以及如何做出出现和消失不同的动画？'
    }
  ]
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <main>
      <Head></Head>
      <div className="px-[60px]">
        {/* <div className='flex flex-col items-center justify-between flex-1'> */}
        <div className="pb-[18px] pt-[34px] text-center text-sm font-medium">
          {current} / {count}
        </div>
        <div className="flex flex-1 justify-center">
          <Carousel setApi={setApi} className="h-[500px] w-[580px]">
            <CarouselContent>
              {list.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="h-[400px] w-full">
                        <div className="p-[44px] text-[30px] font-medium ">{item.content}</div>
                      </div>
                      <CardFooter className="mb-[20px] flex h-[48px] flex-1 justify-center space-x-[10px] overflow-hidden p-0 text-[14px] tracking-wider">
                        <div className="flex w-[140px] cursor-pointer items-center justify-center rounded-[46px] bg-[#FAFAFA] py-[12px] font-medium transition-colors hover:border hover:border-[#FFAC0A] hover:text-[#FFAC0A]">
                          显示内容
                        </div>
                        <div className="flex w-[140px]  cursor-pointer items-center justify-center rounded-[46px] bg-[#FAFAFA] py-[12px] font-medium transition-colors hover:border hover:border-[#FFAC0A] hover:text-[#FFAC0A]">
                          添加至聚焦
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </main>
  )
}
