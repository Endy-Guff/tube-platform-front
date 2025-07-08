'use client'

import { Typography, VideoCard } from '@components/ui'
import { EVideoCategory, useGetVideoByCategory } from '@services'

export const Explore = () => {
  const { data } = useGetVideoByCategory(EVideoCategory.EXPLORE, { withPagination: true })

  return (
    <section>
      <Typography.TITLE2>Explore</Typography.TITLE2>
      <div
        style={{
          display: 'grid',
          columnGap: '1rem',
          rowGap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
        }}
      >
        {data?.data?.videos.map(props => (
          <VideoCard
            key={props.id}
            {...props}
          />
        ))}
      </div>
    </section>
  )
}
