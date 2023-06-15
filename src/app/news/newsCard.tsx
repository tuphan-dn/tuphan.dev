'use client'
import { usePushMessage } from 'components/message/store'
import dayjs from 'dayjs'

import { NewsType } from 'hooks/useNews'

export type NewsCardProps = NewsType & {
  onClick?: () => void
}

export default function NewsCard({
  id,
  name,
  avatar,
  createdAt,
}: NewsCardProps) {
  const pushMessage = usePushMessage()

  return (
    <div className="card w-full h-full shadow-xl image-full">
      <figure>
        <img src={avatar} alt={id} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{dayjs(createdAt).format('DD/MM/YYYY, h:mm A')}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              pushMessage(
                'alert-success',
                `Connect to ${name} successfully! Connect to ${name} successfully! Connect to ${name} successfully!`,
                -1,
              )
            }
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  )
}
