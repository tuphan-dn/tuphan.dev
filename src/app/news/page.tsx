'use client'

import NewsCard from './newsCard'

import { useNews } from 'hooks/useNews'

export default function News() {
  const data = useNews()

  return (
    <div className="grid grid-cols-12 gap-2">
      <h3 className="col-span-12">News</h3>
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-8 @container">
          {data.map((news, i) => (
            <div
              key={i}
              className="col-span-12 @lg:col-span-6 @2xl:col-span-4 @4xl:col-span-3 @6xl:col-span-2"
            >
              <NewsCard {...news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
