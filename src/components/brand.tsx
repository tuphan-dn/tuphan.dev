import Image from 'next/image'

export type BrandLogoProps = {
  size?: number
}

export function BrandLogo({ size = 32 }: BrandLogoProps) {
  return (
    <div className="avatar">
      <div className={'mask mask-squircle'} style={{ width: size }}>
        <Image src="/tuphan.png" alt="tuphan.dev" width={size} height={size} />
      </div>
    </div>
  )
}

export type BrandProps = {
  onClick?: () => void
  size?: number
}

export default function Brand({ onClick = () => {}, size }: BrandProps) {
  return (
    <div
      className="flex shrink items-center gap-3 hover:cursor-pointer"
      onClick={onClick}
    >
      <BrandLogo size={size} />
      <p>tuphan.dev</p>
    </div>
  )
}
