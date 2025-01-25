import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  instagram?: string
}

const team: TeamMember[] = [
  {
    name: "อดิศวร วุฒิกุล",
    role: "Roles",
    instagram: "https://example.com",
  },
  {
    name: "จารุเดช ต่อเติมทรัพย์",
    role: "Roles",
    instagram: "https://example.com",
  },
  {
    name: "สุริยะ",
    role: "Roles",
    instagram: "https://example.com",
  },
  {
    name: "ปีเก้",
    role: "Roles",
    instagram: "https://example.com",
  }
]

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-custom-brown text-custom-cream py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">ผู้จัดทำ</h2>
          <p className="text-custom-tan">ผู้มีส่วนร่วมให้เกิดงานในครั้งนี้</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mb-12">
          {team.map((member) => (
            <Card key={member.name} className="bg-custom-beige/90 border-none">
              <CardContent className="flex justify-between items-center gap-4 p-6">
                <div>
                  <h3 className="text-custom-cream font-semibold text-lg">{member.name}</h3>
                  <p className="text-custom-cream/80">{member.role}</p>
                </div>
                <div className="flex space-x-4">
                  {member.instagram && (
                    <Link href={member.instagram} className="text-custom-cream hover:text-custom-tan transition-colors duration-200">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-custom-cream/80 text-sm">
          <p>เว็บไซต์นี้ถูกจัดทำขึ้นเพื่อเป็นส่วนหนึ่งของรายวิชาภาษาไทย</p>
        </div>
      </div>
    </footer>
  )
}

