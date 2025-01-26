'use client'

import RandomBotany from '@/components/random-botany'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { cn } from '@/lib/utils'

const RightAsideBotany = ({ className }: { className?: string }) => {
  const { width } = useWindowDimensions()
  const amount = width > 768 ? 4 : 2

  return (
    <aside className={cn(className, 'flex w-5/12 justify-center')}>
      <RandomBotany amount={amount} />
    </aside>
  )
}

export default RightAsideBotany
