import Link from 'next/link'
import { Instagram } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface TeamMember {
  name: string
  role: string
  instagram?: string
}

const team: TeamMember[] = [
  {
    name: 'อดิศวร วุฒิกุล',
    role: 'ผู้จัดทำเว็บไซต์',
    instagram: 'https://instagram.com/adisuarn',
  },
  {
    name: 'จารุเดช ต่อเติมทรัพย์',
    role: 'ผู้สืบค้นข้อมูล',
    instagram: 'https://instagram.com/sunsaansan',
  },
  {
    name: 'วีรภัทร สุริยะ',
    role: 'ผู้สรุปข้อมูล',
    instagram: 'https://instagram.com/petesuriya',
  },
  {
    name: 'ศิรเศษฐ์ ตันจิตตสุวรรณ',
    role: 'ผู้ตรวจสอบความถูกต้อง',
    instagram: 'https://instagram.com/piquelnwza005x',
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-custom-brown py-12 text-custom-cream">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">ผู้จัดทำ</h2>
          <p className="text-custom-tan">ผู้มีส่วนร่วมให้เกิดงานในครั้งนี้</p>
        </div>

        <div className="mb-12 grid grid-cols-1 justify-center gap-8 md:grid-cols-2">
          {team.map((member) => (
            <Card key={member.name} className="border-none bg-custom-beige/90">
              <CardContent className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-custom-cream">{member.name}</h3>
                  <p className="text-custom-cream/80">{member.role}</p>
                </div>
                <div className="flex space-x-4">
                  {member.instagram && (
                    <Link
                      target="_blank"
                      href={member.instagram}
                      className="text-custom-cream transition-colors duration-200 hover:text-custom-tan"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-custom-cream/80">
          <p>เว็บไซต์นี้ถูกจัดทำขึ้นเพื่อเป็นส่วนหนึ่งของรายวิชาภาษาไทย</p>
        </div>
      </div>
    </footer>
  )
}
