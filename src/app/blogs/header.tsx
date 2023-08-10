import { BrandLogo } from '@/components/brand'

export default function BlogsHeader() {
  return (
    <div className="flex flex-col @xl:flex-row gap-2 items-center justify-center">
      <BrandLogo size={56} />
      <h3 className="text-center">
        <span className="font-thin">tuphan.dev</span> Blogs
      </h3>
    </div>
  )
}
