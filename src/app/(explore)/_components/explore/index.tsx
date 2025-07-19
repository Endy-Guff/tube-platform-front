'use client'

import { VIDEO_CARD_SIZES } from '@common/consts'
import { useGridColumns } from '@common/hooks'
import { CatergoryHeading, SkeletonLoader, VideoCard } from '@components'
import { EVideoCategory, useGetVideoByCategory } from '@services'
import { Compass } from 'lucide-react'
import dynamic from 'next/dynamic'

const MIN_COLUMN_WIDTH = 250

const ExploreComponent = () => {
  const { columns, gridRef } = useGridColumns(MIN_COLUMN_WIDTH, '1.5rem')
  const { data, isLoading } = useGetVideoByCategory(EVideoCategory.EXPLORE, {
    withPagination: true
  })

  return (
    <section>
      <CatergoryHeading icon={Compass}>Explore</CatergoryHeading>
      {
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            columnGap: '1rem',
            rowGap: '1.5rem',
            gridTemplateColumns: `repeat(auto-fill, minmax(${MIN_COLUMN_WIDTH}px, 1fr))`
          }}
        >
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
        </div>
      }
    </section>
  )
}

export const Explore = dynamic(() => Promise.resolve(ExploreComponent), { ssr: false })
