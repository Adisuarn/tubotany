"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBE9]">
      <div className="text-center space-y-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="inline-block"
            >
              <h1 className="text-[#AD8B73] text-9xl font-bold">4</h1>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="inline-block"
            >
              <svg className="w-32 h-32 text-[#CEAB93]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-2V7h2v7h-2z" />
              </svg>
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="inline-block"
            >
              <h1 className="text-[#AD8B73] text-9xl font-bold">4</h1>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-[#CEAB93] text-2xl font-semibold">Oops! Page Not Found</h2>
          <p className="text-[#E3CAA5] max-w-md mx-auto">
            The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back on track!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#AD8B73] text-[#FFFBE9] rounded-lg font-medium hover:bg-[#CEAB93] transition-colors"
            onClick={() => {
              router.push("/")
            }}
          >
            Go Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
