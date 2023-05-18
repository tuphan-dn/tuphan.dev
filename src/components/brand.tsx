import Image from 'next/image'

export type BrandLogoProps = {
  size?: number
}

console.log(process.env.NODE_ENV)

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
}

export default function Brand({ onClick = () => {} }: BrandProps) {
  return (
    <div
      className="flex items-center space-x-2 hover:cursor-pointer"
      onClick={onClick}
    >
      <BrandLogo />
      <div>
        <p>tuphan.dev</p>
      </div>
    </div>
  )
}
