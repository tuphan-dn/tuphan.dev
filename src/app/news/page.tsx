'use client'

import NewsCard from './newsCard'

import { useNews } from 'hooks/useNews'

export default function News() {
  const data = useNews()

  return (
    <div className="grid grid-cols-12 gap-2">
      <h3 className="col-span-12">News</h3>
      <div className="col-span-12 @container">
        <div className="grid grid-cols-12 gap-4">
          {data.map((news, i) => (
            <div
              key={i}
              className="col-span-12 @xs:col-span-6 @sm:col-span-4 @md:col-span-3 @lg:col-span-2 @4xl:col-span-1"
            >
              <NewsCard {...news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
