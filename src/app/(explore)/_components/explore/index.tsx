'use client'

import { CatergoryHeading, VideoCard } from '@components'
import { EVideoCategory, useGetVideoByCategory } from '@services'
import { Compass } from 'lucide-react'

export const Explore = () => {
  const { data } = useGetVideoByCategory(EVideoCategory.EXPLORE, { withPagination: true })

  return (
    <section>
      <CatergoryHeading icon={Compass}>Explore</CatergoryHeading>
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
