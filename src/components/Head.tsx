'use client'
import { useEffect, useState } from 'react'
import { PlusCircle, ChevronsDownUp } from 'lucide-react'
export function Head() {
  const [title, setTitle] = useState('')
  useEffect(() => {
    const value = localStorage.getItem('local-menus')
    setTitle(JSON.parse(value || ''))
  }, [])
    return (
      <div className="flex h-[78px] flex-1 items-center justify-between border-b border-[#f1f1f1] px-[60px]">
        <div className="text-[28px] font-semibold">{title}</div>
        <div className="flex items-center space-x-[16px]">
          <ChevronsDownUp className="cursor-pointer"></ChevronsDownUp>
          <PlusCircle color="#ffac0a" className="cursor-pointer"></PlusCircle>
        </div>
      </div>
    )
}
