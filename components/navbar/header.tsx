import { Info } from 'lucide-react';
import { Navigation } from '@/components/navbar/navigation';
import { Leaf } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-[60px] flex items-center bg-[#AD8B73]">
      <nav className="w-full">
        <ul className="w-full flex">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center w-full">
              <div
                className="hover:scale-105 transition-transform duration-200 px-3 font-bold flex items-center text-center text-[#E3CAA5]"
              >
                <Link
                  className="hidden md:flex flex-col mr-5"
                  href='/'
                >
                  <p>TU</p>
                  <p>BOTANY</p>
                </Link>
                <Link
                  href='/'
                >
                  <Leaf />
                </Link>
              </div>
              <div className="w-full space-x-10 flex justify-center">
                <Navigation />
              </div>
            </div>
            <div className="px-3 text-center">
              <HoverCard>
                <HoverCardTrigger>
                  <Info className="text-[#E3CAA5] hover:scale-125 cursor-pointer transition-transform duration-300" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-[#E3CAA5]*2">ผลงานนี้ถูกจัดทำขึ้นเพื่อเป็นส่วนหนึ่งในรายวิชาภาษาไทย</p>
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
