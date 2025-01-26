import { Leaf } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroMain = () => {
  return (
    <Card className="my-5 mt-12 flex flex-col items-center text-center border rounded-2xl p-5 w-[90%] mx-auto">
      <CardTitle className="text-2xl font-bold text-center items-center flex">Welcome to TU B<span><Leaf /></span>TANY</CardTitle>
      <CardContent>
        <CardDescription className="mt-5">
          เว็บไซต์ถูกจัดทำขึ้นเพื่อรวบรวมข้อมูลเกี่ยวกับสวนพฤกษศาสตร์และพรรณไม้ต่าง ๆ ในโรงเรียนเตรียมอุดมศึกษา
          โดยมีวัตถุประสงค์เพื่อเป็นแหล่งเรียนรู้และอนุรักษ์พันธุ์พืชท้องถิ่น
          ตลอดจนส่งเสริมความรู้ความเข้าใจด้านพฤกษศาสตร์แก่นักเรียนและผู้สนใจทั่วไป
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          className="px-3 py-2 bg-[#AD8B73] text-[#E3CAA5] rounded-2xl hover:bg-[#967E76] transform transition-all duration-300"
          asChild
        >
          <Link
            href="/trees"
          >
            รายชื่อต้นไม้ทั้งหมด
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default HeroMain
