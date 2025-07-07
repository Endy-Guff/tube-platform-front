'use client'

import { VideoCard } from '@components/ui'
import { EVideoCategory, useGetVideoByCategory } from '@services'

export default function Explore() {
  const { data } = useGetVideoByCategory(EVideoCategory.EXPLORE) // todo: убрать отсюда, оставить серверным компонент
  return (
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
  )
}
