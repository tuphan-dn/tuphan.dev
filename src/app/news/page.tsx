'use client'

import NewsCard from './newsCard'

import { useNews } from 'hooks/useNews'

export default function News() {
  const data = useNews()

  return (
    <div className="grid grid-cols-12 gap-2">
      <h3 className="col-span-12">News</h3>
      <div className="col-span-12 @container">
        <div className="grid grid-cols-12 gap-1 @sm:gap-2 @xl:gap-3 @3xl:gap-4 @6xl:gap-5 ">
          {data.map((news, i) => (
            <div
              key={i}
              className="col-span-12 @sm:col-span-6 @xl:col-span-4 @3xl:col-span-3 @6xl:col-span-2"
            >
              <NewsCard {...news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
