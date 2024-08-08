'use client'
import { useState } from 'react'
import clsx from 'clsx'

import { Disc3 } from 'lucide-react'
import ReactPlayer from 'react-player/soundcloud'
import Island from '@/components/island'

export default function PlayButton() {
  const [playing, setPlaying] = useState(false)

  return (
    <button
      className="btn btn-sm rounded-full"
      onClick={() => setPlaying(!playing)}
    >
      <Island>
        <ReactPlayer
          className="invisible !w-dvw !h-dvh fixed top-0 left-0 pointer-events-none"
          url="https://soundcloud.com/sontuph/city-pop-rain-lofi-ghibli-inspired-atmosphere-for-study-chillout-focus-relax"
          playing={playing}
          loop
        />
      </Island>
      chillout
      <Disc3
        className={clsx(
          'w-4 h-4 bg-base-content text-base-100 rounded-full animate-[spin_2s_linear_infinite]',
          {
            '[animation-play-state:running]': playing,
            '[animation-play-state:paused]': !playing,
          },
        )}
      />
    </button>
  )
}
