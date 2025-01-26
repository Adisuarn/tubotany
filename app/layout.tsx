import { Geist, Noto_Sans_Thai } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/components/footer'
import Header from '@/components/navbar/header'
import { Toaster } from '@/components/ui/toaster'
import { seo } from '@/lib/seo'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-sans-thai',
  subsets: ['thai'],
})

export const metadata = seo

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.className} ${notoSansThai.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
