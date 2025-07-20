import { COLORS, VIDEO_CARD_SIZES } from '@common/consts'
import { getFormatRelativeDate, getFormatViews } from '@common/tools'
import { PUBLIC_ROUTES } from '@config'
import { IVideo } from '@services'
import cn from 'clsx'
import { parseISO } from 'date-fns'
import * as m from 'framer-motion/m'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Box } from '../box'
import { Typography } from '../typography'

import styles from './styles.module.scss'

export const VideoCard: FC<IVideo> = ({
  thumbnailUrl,
  title,
  publicId,
  channel,
  viewsCount,
  createdAt
}) => (
  <m.div
    className={styles.card}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
  >
    <div className={styles.preview}>
      <Link href={PUBLIC_ROUTES.VIDEO(publicId)}>
        <Image
          className={styles['preview-img']}
          src={thumbnailUrl}
          alt={title}
          width={VIDEO_CARD_SIZES.width}
          height={VIDEO_CARD_SIZES.height}
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

    <Box
      className={styles.info}
      alignItems='center'
      justifyContent='space-between'
    >
      <Box alignItems='center'>
        <User
          color={COLORS.primary}
          size={12}
        />
        <Typography.DESCRIPTION className={styles['views-count']}>
          {getFormatViews(viewsCount)}
        </Typography.DESCRIPTION>
      </Box>
      <div className={styles.date}>
        <Typography.DESCRIPTION>
          {getFormatRelativeDate(parseISO(createdAt))}
        </Typography.DESCRIPTION>
      </div>
    </Box>

    <div className={cn(styles.title, 'line-clamp-2')}>
      <Link href={PUBLIC_ROUTES.VIDEO(publicId)}>{title}</Link>
    </div>

    <div className={styles.channel}>
      <Link href={PUBLIC_ROUTES.CHANNEL(channel.slug)}>channel</Link>
      {/*  // todo: дописать имя канала channel.name */}
    </div>
  </m.div>
)
