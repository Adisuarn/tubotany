import * as React from "react"
import { Book, Video, FileText, LinkIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client";
import Link from "next/link"

const resources = [
  {
    category: "ข้อมูลต้นไม้ทั่วไป",
    items: [
      { title: "คลังต้นไม้แห่งการเรียนรู้", type: "article", link: "https://www.wisdomking.or.th/th/tree-knowledge" },
      { title: "ข้อมูลพันธุ์ไม้", type: "article", link: "https://data.addrun.org/plant/" },
      { title: "กลุ่มงานพฤกษศาสตร์ป่าไม้", type: "book", link: "https://botany.dnp.go.th/detail.html?menu=herbariumThai_publications" },
    ],
  },
  {
    category: "พฤกษศาสตร์ในรั้วเตรียมอุดม",
    items: [
      { title: "งานสวนพฤกษศาสตร์", type: "link", link: "https://www.facebook.com/TUBCofficial" },
      { title: "แหล่่งข้อมูลพรรณไม้อื่น ๆ", type: "link", link: "https://www.tumblr.com/noarcs11" },
    ],
  }
]

const getIcon = (type: string) => {
  switch (type) {
    case "book":
      return <Book className="h-4 w-4" />
    case "video":
      return <Video className="h-4 w-4" />
    case "article":
      return <FileText className="h-4 w-4" />
    case "link":
      return <LinkIcon className="h-4 w-4" />
    default:
      return null
  }
}

export function EducationalResources() {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">แหล่งความรู้เพิ่มเติม</h2>
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>แหล่งความรู้เสริมเพื่อการศึกษา</CardTitle>
            <CardDescription>สามารถศึกษาเว็บไซต์ต่าง ๆ ที่เกี่ยวข้องกับพฤกศาสตร์ได้ที่ด้านล่าง</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {resources.map((category, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{category.category}</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getIcon(item.type)}
                            <span>{item.title}</span>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                              ดูข้อมูล
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}

