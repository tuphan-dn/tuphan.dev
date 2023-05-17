import { CSSProperties } from 'react'

import styles from './index.module.scss'

export type RollerProps = {
  style: CSSProperties
}

export default function Roller({ style = {} }: RollerProps) {
  return (
    <div className={styles['lds-roller']} style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
