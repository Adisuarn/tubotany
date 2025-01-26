import { TreeDeciduous, TreePine } from 'lucide-react'
import * as motion from 'motion/react-client'

import { ContactForm } from '@/components/contact-form'
import { EducationalResources } from '@/components/educational-resources'
import HeroMain from '@/components/hero-main'
import RightAsideBotany from '@/components/r-aside-botany'
import { cn } from '@/lib/utils'
import TreeCatagories from '@/public/data/tree-catagories.json'

interface Catagory {
  id: number
  name: string
  description: string
}

const Catagories = JSON.parse(JSON.stringify(TreeCatagories))

const Home = () => {
  return (
    <main className="h-full w-full">
      <motion.section
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <HeroMain />
      </motion.section>

      <motion.section
        className="flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex w-full gap-4 p-5 md:grid md:w-[90%] md:grid-rows-[auto_1fr]">
          <aside className="w-7/12 md:row-span-1 md:flex md:w-full md:flex-col md:text-center">
            <h1 className="text-2xl font-bold">พรรณไม้ที่น่าสนใจ</h1>
            <p className="mt-2">
              ตัวอย่างพรรณไม้ที่น่าสนใจ ซึ่งถูกรวบรวมมาจากสถานที่ต่าง ๆ ในโรงเรียนเตรียมอุดมศึกษา
              โดยแต่ละชนิดมีความโดดเด่นและคุณค่าทางธรรมชาติที่แตกต่างกันไป
              นอกจากนี้ยังมีพรรณไม้ที่มีประโยชน์ในด้านการศึกษา
              ซึ่งทางโรงเรียนได้ดูแลรักษาและพัฒนาให้เป็นแหล่งเรียนรู้สำหรับนักเรียน
            </p>
          </aside>
          <RightAsideBotany className="ml-4 md:row-span-2 md:ml-0 md:flex md:w-full" />
        </div>
      </motion.section>

      <section className="w-full bg-[#E3CAA5]/30 py-8">
        <div className="container mx-auto p-5">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#AD8B73] md:mb-10 md:text-4xl">
            หมวดหมู่พันธุ์ไม้
          </h2>
          <div>
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
              {Catagories.map((catagory: Catagory) => (
                <motion.div
                  key={catagory.id}
                  className="relative flex w-full flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="group relative z-10 mt-2 rounded-full border-2 border-[#CEAB93] p-2 transition-colors duration-200 hover:bg-[#CEAB93]">
                    <div className="-z-5 absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#CEAB93]/20 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                    {catagory.id % 2 === 0 ? (
                      <TreePine className="relative z-10 text-[#CEAB93] group-hover:text-[#AD8B73]" />
                    ) : (
                      <TreeDeciduous className="relative z-10 text-[#CEAB93] group-hover:text-[#AD8B73]" />
                    )}
                  </div>
                  <div className="mb-5 flex w-full flex-col items-center text-center">
                    <h1 className="mt-2 font-bold text-[#CEAB93]">{catagory.name}</h1>
                    <p className="w-[80%] text-[#CEAB93]/90">{catagory.description}</p>
                  </div>
                  <div
                    className={cn(
                      'absolute top-full h-[1px] w-[90%] bg-black/20 md:w-[110%]',
                      { 'md:hidden': catagory.id === 5 },
                      { hidden: catagory.id === 6 },
                    )}
                  ></div>
                </motion.div>
              ))}
              <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-black/20 md:block"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="container mx-auto p-5">
          <EducationalResources />
        </div>
      </section>

      <section id="contact" className="w-full bg-[#E3CAA5]/30 py-8">
        <div className="container mx-auto p-5">
          <h2 className="mb-6 text-center text-4xl font-bold text-[#AD8B73]">ติดต่อเรา</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default Home
