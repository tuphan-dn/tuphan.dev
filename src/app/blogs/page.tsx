import BlogsHeader from './header'
import Banner from './banner'
import BlogsNavigation from './navigation'
import Shelf from './shelf'
import BlogsPagination from './pagination'

import { getDatabase } from '@/app/api/blogs/[pageId]/service'

export default async function Blogs() {
  const { pageIds, metadata } = await getDatabase()

  return (
    <div className="flex flex-row justify-center rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 transition-all p-4">
      <div className="w-full max-w-[1240px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-full py-24">
            <BlogsHeader />
          </div>
          <div className="col-span-full">
            <Banner pageIds={pageIds} metadata={metadata} />
          </div>
          <div className="col-span-full mt-8">
            <BlogsNavigation pageIds={pageIds} metadata={metadata} />
          </div>
          <div className="col-span-full">
            <Shelf pageIds={pageIds} metadata={metadata} />
          </div>
          <div className="col-span-full flex flex-row justify-center mt-8">
            <BlogsPagination pageIds={pageIds} metadata={metadata} />
          </div>
        </div>
      </div>
    </div>
  )
}
