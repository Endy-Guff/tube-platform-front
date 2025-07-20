'use client'

import { MIN_COLUMN_GRID_WIDTH, VIDEO_CARD_SIZES } from '@common/consts'
import { useGridColumns } from '@common/hooks'
import { SkeletonLoader, Typography, VideoCard, VideoGridLayout } from '@components'
import { useGetVideos } from '@services'
import dynamic from 'next/dynamic'
import { FC } from 'react'

interface IVideosProps {
  search: string
}

export const VideosComponent: FC<IVideosProps> = ({ search }) => {
  const { columns, gridRef } = useGridColumns(MIN_COLUMN_GRID_WIDTH, '1.5rem')

  const { data, isLoading } = useGetVideos(
    { search },
    {
      withPagination: true
    }
  )
  return (
    <VideoGridLayout ref={gridRef}>
      {isLoading && (
        <SkeletonLoader
          count={columns}
          style={{ height: VIDEO_CARD_SIZES.height }}
        />
      )}
      {!isLoading && data?.videos.length ? (
        data?.videos.map(props => (
          <VideoCard
            key={props.id}
            {...props}
          />
        ))
      ) : (
        <Typography.TEXT>Not found</Typography.TEXT>
      )}
    </VideoGridLayout>
  )
}

export const Videos = dynamic(() => Promise.resolve(VideosComponent), { ssr: false })
