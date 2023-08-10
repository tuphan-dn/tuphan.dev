'use client'

export default function Skeleton() {
  return (
    <div className="w-full flex flex-col gap-8 items-center mb-16 animate-pulse">
      {/* Header */}
      <div className="w-full h-48 bg-base-300 rounded-xl" />
      {/* Title */}
      <div className="w-full max-w-[720px] flex flex-col gap-2">
        <div className="w-full h-8 bg-base-300 rounded-xl" />
        <div className="w-1/2 h-8 bg-base-300 rounded-xl" />
      </div>
      {/* Collection */}
      <div className="w-full max-w-[720px] flex flex-col gap-2">
        <div className="w-32 h-4 bg-base-300 rounded-xl" />
        <div className="w-32 h-4 bg-base-300 rounded-xl" />
      </div>
      {/* Divider */}
      <div className="w-full max-w-[720px]">
        <div className="divider -mt-4" />
      </div>
      {/* Image */}
      <div className="w-full max-w-[720px]">
        <div className="w-full h-96 bg-base-300 rounded-xl" />
      </div>
      {/* Text 1 */}
      <div className="w-full max-w-[720px] flex flex-col gap-2">
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-1/3 h-6 bg-base-300 rounded-xl" />
      </div>
      {/* Twitter */}
      <div className="w-full max-w-[360px]">
        <div className="w-full h-96 bg-base-300 rounded-xl" />
      </div>
      {/* Text 2 */}
      <div className="w-full max-w-[720px] flex flex-col gap-2">
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-full h-6 bg-base-300 rounded-xl" />
        <div className="w-2/3 h-6 bg-base-300 rounded-xl" />
      </div>
    </div>
  )
}
