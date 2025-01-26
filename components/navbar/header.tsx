import Link from 'next/link'
import { Info, Leaf } from 'lucide-react'

import { Navigation } from '@/components/navbar/navigation'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const Header = () => {
  return (
    <header className="flex h-[60px] items-center bg-[#AD8B73]">
      <nav className="mx-5 w-full">
        <ul className="flex w-full">
          <div className="flex w-full items-center justify-evenly">
            <div className="flex items-center px-3 text-center font-bold text-[#E3CAA5] transition-transform duration-200 hover:scale-105">
              <Link className="mr-5 hidden flex-col md:flex" href="/">
                <p>TU</p>
                <p>BOTANY</p>
              </Link>
              <Link href="/">
                <Leaf />
              </Link>
            </div>
            <div className="flex w-full justify-center md:justify-normal">
              <Navigation />
            </div>
            <div className="px-3 text-center">
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="cursor-pointer text-[#E3CAA5] transition-transform duration-300 hover:scale-125" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-[#E3CAA5]*2">
                    ผลงานนี้ถูกจัดทำขึ้นเพื่อเป็นส่วนหนึ่งในรายวิชาภาษาไทย
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
