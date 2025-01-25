"use client"

import { useState } from "react"
import { z } from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().nonempty("กรุณากรอกชื่อของคุณ"),
  email: z.string().email("กรุณากรอกอีเมลที่ถูกต้อง"),
  subject: z.string().nonempty("กรุณากรอกหัวข้อ"),
  message: z.string().nonempty("กรุณากรอกข้อความของคุณ"),
})

export function ContactForm() {

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset()
      toast({
        title: "ข้อความของคุณถูกส่งเรียบร้อยแล้ว",
        description: "ขอบคุณที่ติดต่อเรา ทางเราจะรีบติดต่อกลับไปโดยเร็วที่สุด",
      });
      
    } catch {
      toast({
        variant: "destructive",
        title: "เกิดข้อผิดพลาด",
        description: "ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-[#E3CAA5] shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#AD8B73] text-xl font-bold text-center">ส่งข้อความถึงเรา</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#AD8B73] font-semibold">ชื่อ</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="กรุณากรอกชื่อของคุณ"
                      autoComplete="off"
                      {...field}
                      className="bg-[#FFFBE9] border-[#CEAB93] placeholder:opacity-20 focus:border-[#AD8B73] focus:ring-[#AD8B73]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#AD8B73] font-semibold">อีเมล</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@domain.com"
                      autoComplete="off"
                      {...field}
                      className="bg-[#FFFBE9] border-[#CEAB93] placeholder:opacity-20 focus:border-[#AD8B73] focus:ring-[#AD8B73]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#AD8B73] font-semibold">หัวข้อ</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="กรุณากรอกหัวข้อ"
                      autoComplete="off"
                      {...field}
                      className="bg-[#FFFBE9] border-[#CEAB93] placeholder:opacity-20 focus:border-[#AD8B73] focus:ring-[#AD8B73]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#AD8B73] font-semibold">ข้อความ</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="กรุณากรอกข้อความของคุณ"
                      autoComplete="off"
                      {...field}
                      className="bg-[#FFFBE9] border-[#CEAB93] placeholder:opacity-20 focus:border-[#AD8B73] focus:ring-[#AD8B73] min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-[#AD8B73] hover:bg-[#CEAB93] text-white" disabled={isSubmitting}>
              {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

