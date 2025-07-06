import { COLORS } from '@common/consts'
import { getFormatRelativeDate, getFormatViews } from '@common/tools'
import { PUBLIC_ROUTES } from '@config'
import { IVideo } from '@services'
import { parseISO } from 'date-fns'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const VideoCard: FC<IVideo> = ({
  thumbnailUrl,
  title,
  publicId,
  channel,
  viewsCount,
  createdAt
}) => {
  return (
    <div>
      <div>
        <Link href={PUBLIC_ROUTES.VIDEO(publicId)}>
          <Image
            src={thumbnailUrl}
            alt={title}
            width={250}
            height={140}
          />
        </Link>
        <Link href={PUBLIC_ROUTES.CHANNEL(channel.slug)}>
          <Image
            src={channel.avatarUrl}
            alt={''} // todo: дописать имя канала channel.name
            width={30}
            height={30}
          />
        </Link>
      </div>

      <div>
        <div>
          <User color={COLORS.primary} />
          <span>{getFormatViews(viewsCount)}</span>
        </div>
        <div>{getFormatRelativeDate(parseISO(createdAt))}</div>
      </div>

      <div>{title}</div>

      <div>
        <span>channel</span> {/*  // todo: дописать имя канала channel.name */}
      </div>
    </div>
  )
}
