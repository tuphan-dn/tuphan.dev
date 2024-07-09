'use client'
import { useCallback } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { useRouter } from 'next-nprogress-bar'
import useSWR from 'swr'

export default function Page() {
  const { push } = useRouter()
  const { data } = useSWR('/api/blog', async (api: string) => {
    const { data } = await axios.get<Tree>(api)
    return data
  })

  const onSpeech = useCallback(() => {
    const speech = new SpeechSynthesisUtterance()
    speech.text =
      "We're excited to share a major feature addition to Family, Previews. Enabled by our collaboration with Blowfish, Previews offers an unprecedented level of user control and transparency when navigating the world of Ethereum."
    speech.lang = 'en'
    window.speechSynthesis?.speak(speech)
  }, [])

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <p>Home</p>
      <button className="btn btn-primary" onClick={onSpeech}>
        Listen to the Blog
      </button>
      <div className="w-full max-w-a4 p-4 grid grid-cols-12 gap-4">
        {(data?.children || []).map(
          ({ title, description, updatedAt, route }) => (
            <div
              key={title}
              className="col-span-full flex flex-col gap-4 p-4 bg-base-200 border-2 border-base-300 rounded-3xl cursor-pointer"
              onClick={() => push(route)}
            >
              <h1>{title}</h1>
              <p className="text-sm">{description}</p>
              <p className="text-xs opacity-60">
                {dayjs(updatedAt).format('DD MMMM, YYYY')}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
