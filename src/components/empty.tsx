import { FolderSearch } from 'lucide-react'

export default function Empty() {
  return (
    <span className="w-full opacity-60 flex flex-row gap-2 items-center justify-center">
      <FolderSearch className="w-6 h-6" />
      <p className="text-center">No Data</p>
    </span>
  )
}
