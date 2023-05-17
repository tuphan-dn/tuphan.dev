export type BrandLogoProps = {
  size?: number
}

export function BrandLogo({ size = 32 }: BrandLogoProps) {
  return (
    <div className="avatar">
      <div className={`mask mask-squircle`} style={{ width: size }}>
        <img src="/tuphan.png" alt="tuphan.dev" />
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
