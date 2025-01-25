import HeroMain from '@/components/hero-main';
import RightAsideBotany from '@/components/r-aside-botany';
import { ContactForm } from '@/components/contact-form';
import { EducationalResources } from '@/components/educational-resources';
import { cn } from '@/lib/utils';
import { TreePine, TreeDeciduous } from 'lucide-react';
import TreeCatagories from '@/public/data/tree-catagories.json';

interface Catagory {
  id: number
  name: string
  description: string
}

const Catagories = JSON.parse(JSON.stringify(TreeCatagories))

const Home = () => {
  return (
    <main className="w-full h-full">

      <section className="w-full">
        <HeroMain />
      </section>

      <section className="w-full flex flex-col items-center">
        <div className="w-full md:w-[90%] flex p-5 md:grid md:grid-rows-[auto_1fr] gap-4">
          <aside className="w-7/12 md:row-span-1 md:w-full md:flex md:flex-col md:text-center">
            <h1 className="text-2xl font-bold">พันธุ์ไม้ที่น่าสนใจ</h1>
            <p className="mt-2">
              ตัวอย่างพันธุ์ไม้ที่น่าสนใจ ซึ่งถูกรวบรวมมาจากสถานที่ต่าง ๆ ในโรงเรียนเตรียมอุดมศึกษา
              โดยแต่ละชนิดมีความโดดเด่นและคุณค่าทางธรรมชาติที่แตกต่างกันไป นอกจากนี้ยังมีพันธุ์ไม้ที่มีประโยชน์ในด้านการศึกษา
              ซึ่งทางโรงเรียนได้ดูแลรักษาและพัฒนาให้เป็นแหล่งเรียนรู้สำหรับนักเรียน
            </p>
          </aside>
          <RightAsideBotany className="ml-4 md:ml-0 md:row-span-2 md:flex md:w-full" />
        </div>
      </section>

      <section className="w-full py-8 bg-[#E3CAA5]/30">
        <div className="container mx-auto p-5">
          <h2 className="text-2xl font-bold mb-6 text-[#AD8B73]">หมวดหมู่พันธุ์ไม้</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              {Catagories.map((catagory: Catagory) => (
                <div key={catagory.id} className="relative w-full flex flex-col items-center">
                  <div className="group relative mt-2 border-2 border-[#CEAB93] hover:bg-[#CEAB93] p-2 rounded-full transition-colors duration-200 z-10">
                    <div className="rounded-full absolute h-[60px] w-[60px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#CEAB93]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-5"></div>
                    {catagory.id % 2 === 0
                      ? (
                        <TreePine className="group-hover:text-[#AD8B73] text-[#CEAB93] relative z-10" />
                      )
                      : (
                        <TreeDeciduous className="group-hover:text-[#AD8B73] text-[#CEAB93] relative z-10" />
                      )
                    }
                  </div>
                  <div className="mb-5 flex flex-col text-center w-full items-center">
                    <h1 className="mt-2 font-bold text-[#CEAB93]">{catagory.name}</h1>
                    <p className="w-[80%] text-[#CEAB93]/90">{catagory.description}</p>
                  </div>
                  <div className={cn("absolute top-full w-[90%] md:w-[110%] h-[1px] bg-black/20", { 'md:hidden': catagory.id === 5 }, { 'hidden': catagory.id === 6 })}></div>
                </div>
              ))}
              <div className="hidden md:block absolute top-0 left-1/2 h-full w-[1px] bg-black/20 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="container mx-auto p-5">
          <EducationalResources />
        </div>
      </section>

      <section id="contact" className="w-full py-8 bg-[#E3CAA5]/30">
        <div className="container mx-auto p-5">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#AD8B73]">ติดต่อเรา</h2>
          <ContactForm />
        </div>
      </section>

    </main>
  )
}

export default Home
