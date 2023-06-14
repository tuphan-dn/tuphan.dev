'use client'
import { useEffect } from 'react'
import { useAsync } from 'react-use'

export type NewsType = {
  id: string
  name: string
  avatar: string
  createdAt: Date
}

const getMockData = async (route: string): Promise<NewsType[]> => {
  const re = await fetch(`https://63807d338efcfcedac062a10.mockapi.io${route}`)
  const data = await re.json()
  return data.map(({ createdAt, ...rest }: NewsType) => ({
    createdAt: new Date(createdAt),
    ...rest,
  }))
}

export const useNews = () => {
  const { error, value } = useAsync(async () => getMockData('/news'))

  useEffect(() => {
    if (error) console.error(error.message)
  }, [error])

  return value || []
}
