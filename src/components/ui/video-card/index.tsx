import { COLORS } from '@common/consts'
import { getFormatRelativeDate, getFormatViews } from '@common/tools'
import { PUBLIC_ROUTES } from '@config'
import { IVideo } from '@services'
import cn from 'clsx'
import { parseISO } from 'date-fns'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './styles.module.scss'

export const VideoCard: FC<IVideo> = ({
  thumbnailUrl,
  title,
  publicId,
  channel,
  viewsCount,
  createdAt
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <Link href={PUBLIC_ROUTES.VIDEO(publicId)}>
          <Image
            className={styles['preview-img']}
            src={thumbnailUrl}
            alt={title}
            width={250}
            height={140}
          />
        </Link>
        <Link
          className={styles['channel-link']}
          href={PUBLIC_ROUTES.CHANNEL(channel.slug)}
        >
          <Image
            className={styles['channel-img']}
            src={channel.avatarUrl}
            alt={''} // todo: дописать имя канала channel.name
            width={30}
            height={30}
          />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.views}>
          <User
            color={COLORS.primary}
            size={12}
          />
          <span className={styles['views-count']}>{getFormatViews(viewsCount)}</span>
        </div>
        <div className={styles.date}>{getFormatRelativeDate(parseISO(createdAt))}</div>
      </div>

      <div className={cn(styles.title, 'line-clamp-2')}>
        <Link href={PUBLIC_ROUTES.VIDEO(publicId)}>{title}</Link>
      </div>

      <div className={styles.channel}>
        <Link href={PUBLIC_ROUTES.CHANNEL(channel.slug)}>channel</Link>
        {/*  // todo: дописать имя канала channel.name */}
      </div>
    </div>
  )
}
