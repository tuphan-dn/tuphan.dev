'use client'
import Script from 'next/script'

export default function ModelViewer() {
  return (
    <div className="flex flex-col gap-2 h-full justify-center">
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"
        async
      />
      <div className="relative">
        <div className="absolute w-1/2 h-2/3 left-1/4 bottom-0 bg-gradient-to-r from-sky-500 to-indigo-500 blur-3xl rounded-3xl" />
        <model-viewer
          class="w-full h-[75dvh]"
          alt="Mario"
          src="/mario.glb"
          shadow-intensity="0"
          touch-action="pan-y"
          camera-orbit="0deg 85deg 105%"
          camera-controls
          disable-pan
          disable-zoom
          auto-rotate
          ar
        />
      </div>
    </div>
  )
}
