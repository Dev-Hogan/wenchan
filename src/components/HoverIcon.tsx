'use client'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

type HoverProps = {
  icon: React.ReactNode
  content?: React.ReactNode
}

export function HoverIcon({ icon, content }: HoverProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{icon}</HoverCardTrigger>
      <HoverCardContent>{content}</HoverCardContent>
    </HoverCard>
  )
}
