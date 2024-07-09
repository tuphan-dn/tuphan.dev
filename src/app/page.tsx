'use client'
import { useCallback } from 'react'

export default function Page() {
  const onSpeech = useCallback(() => {
    const speech = new SpeechSynthesisUtterance()
    speech.text =
      "We're excited to share a major feature addition to Family, Previews. Enabled by our collaboration with Blowfish, Previews offers an unprecedented level of user control and transparency when navigating the world of Ethereum."
    speech.lang = 'en'
    window.speechSynthesis?.speak(speech)
  }, [])

  return (
    <div className="w-full flex flex-row gap-4 p-4">
      <p>Home</p>
      <button className="btn btn-primary" onClick={onSpeech}>
        Listen to the Blog
      </button>
    </div>
  )
}
