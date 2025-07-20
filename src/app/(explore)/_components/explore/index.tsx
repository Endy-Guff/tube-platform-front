'use client'

import { MIN_COLUMN_GRID_WIDTH, VIDEO_CARD_SIZES } from '@common/consts'
import { useGridColumns } from '@common/hooks'
import { CatergoryHeading, SkeletonLoader, VideoCard, VideoGridLayout } from '@components'
import { EVideoCategory, useGetVideos } from '@services'
import { Compass } from 'lucide-react'
import dynamic from 'next/dynamic'

const ExploreComponent = () => {
  const { columns, gridRef } = useGridColumns(MIN_COLUMN_GRID_WIDTH, '1.5rem')
  const { data, isLoading } = useGetVideos(
    { category: EVideoCategory.EXPLORE },
    {
      withPagination: true
    }
  )

  return (
    <section>
      <CatergoryHeading icon={Compass}>Explore</CatergoryHeading>
      {
        <VideoGridLayout ref={gridRef}>
          {isLoading ? (
            <SkeletonLoader
              count={columns}
              style={{ height: VIDEO_CARD_SIZES.height }}
            />
          ) : (
            data?.data?.videos.map(props => (
              <VideoCard
                key={props.id}
                {...props}
              />
            ))
          )}
        </VideoGridLayout>
      }
    </section>
  )
}

export const Explore = dynamic(() => Promise.resolve(ExploreComponent), { ssr: false })
