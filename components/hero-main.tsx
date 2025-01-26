import Link from 'next/link'
import { Leaf } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'

const HeroMain = () => {
  return (
    <Card className="mx-auto my-5 mt-12 flex w-[90%] flex-col items-center rounded-2xl border p-5 text-center">
      <CardTitle className="flex items-center text-center text-2xl font-bold">
        Welcome to TU B
        <span>
          <Leaf />
        </span>
        TANY
      </CardTitle>
      <CardContent>
        <CardDescription className="mt-5">
          เว็บไซต์ถูกจัดทำขึ้นเพื่อรวบรวมข้อมูลเกี่ยวกับสวนพฤกษศาสตร์และพรรณไม้ต่าง ๆ
          ในโรงเรียนเตรียมอุดมศึกษา
          โดยมีวัตถุประสงค์เพื่อเป็นแหล่งเรียนรู้และอนุรักษ์พันธุ์พืชท้องถิ่น
          ตลอดจนส่งเสริมความรู้ความเข้าใจด้านพฤกษศาสตร์แก่นักเรียนและผู้สนใจทั่วไป
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          className="transform rounded-2xl bg-[#AD8B73] px-3 py-2 text-[#E3CAA5] transition-all duration-300 hover:bg-[#967E76]"
          asChild
        >
          <Link href="/trees">รายชื่อต้นไม้ทั้งหมด</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default HeroMain
