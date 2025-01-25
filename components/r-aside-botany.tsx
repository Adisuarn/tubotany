"use client"

import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import RandomBotany from '@/components/random-botany';
import { cn } from '@/lib/utils';

const RightAsideBotany = ({ className }: { className?: string }) => {

  const { width } = useWindowDimensions();
  const amount = width > 768 ? 4 : 2;
  
  return (
    <aside className={cn(className, 'w-5/12 flex justify-center')}>
      <RandomBotany amount={amount} />
    </aside>
  )
}

export default RightAsideBotany
