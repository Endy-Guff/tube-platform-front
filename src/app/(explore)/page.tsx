import { Typography, VideoCard } from '@components'
import { EVideoCategory } from '@services'
import { videoService } from '@services/video/service'

import { Explore } from './_components'

export const revalidate = 100
export const dynamic = 'force-static'

export default async function Home() {
  const data = await videoService.getVideosByCategory(EVideoCategory.TRENDING)

  return (
    <section>
      <section>
        <Typography.TITLE2>Trending</Typography.TITLE2>
        <div
          style={{
            display: 'grid',
            columnGap: '1rem',
            rowGap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
          }}
        >
          {data?.data?.map(props => (
            <VideoCard
              key={props.id}
              {...props}
            />
          ))}
        </div>
      </section>
      <Explore />
    </section>
  )
}
