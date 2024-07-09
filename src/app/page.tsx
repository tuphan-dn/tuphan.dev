'use client'
import axios from 'axios'
import dayjs from 'dayjs'
import { useRouter } from 'next-nprogress-bar'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Page() {
  const { push } = useRouter()
  const { data } = useSWR('/api/blog', async (api: string) => {
    const { data } = await axios.get<Tree>(api)
    return data
  })

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full max-w-a4 p-6 grid grid-cols-12 gap-0">
        {(data?.children || []).map(
          ({ title, description, updatedAt, route }, i) => (
            <motion.div
              key={title}
              className="col-span-full grid grid-cols-12 gap-4 py-16 border-b border-base-300 cursor-pointer relative group"
              onClick={() => push(route)}
              initial={{ y: 8 * (i + 1), opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="col-span-full sm:col-span-2 text-xs opacity-60 mt-1">
                {dayjs(updatedAt).format('DD MMMM, YYYY')}
              </span>
              <h2 className="col-span-full max-sm:mb-2 sm:col-span-4 font-semibold -mt-1">
                {title}
              </h2>
              <p className="col-span-full sm:col-span-6 text-sm tracking-tight opacity-60">
                {description}
              </p>
              <button className="btn btn-circle btn-outline btn-sm absolute bottom-4 left-0 hidden transition-all group-hover:flex">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ),
        )}
      </div>
    </div>
  )
}
