'use client'

import { useNews } from 'hooks/useNoti'
import NewsCard from './newsCard'

export default function News() {
  const data = useNews()

  return (
    <div className="grid grid-cols-1 gap-2">
      <h3>News</h3>
      <div className="grid grid-cols-12 gap-8 @container">
        {data.map((news, i) => (
          <div key={i} className="col-span-6 @lg:col-span-4 @4xl:col-span-3">
            <NewsCard {...news} />
          </div>
        ))}
      </div>
    </div>
  )
}
