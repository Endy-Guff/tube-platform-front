import { CatergoryHeading, VideoCard } from '@components'
import { PUBLIC_ROUTES } from '@config/app'
import { EVideoCategory } from '@services'
import { videoService } from '@services/video/service'
import { Flame } from 'lucide-react'
import { Metadata } from 'next'

import { Explore } from './_components'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
  description: 'App for video watching',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${PUBLIC_ROUTES.EXPLORE}`
  },
  openGraph: {
    title: 'Tube Platform',
    description: 'App for video watching',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${PUBLIC_ROUTES.EXPLORE}`,
    siteName: 'Tube Platform',
    type: 'website'
  }
}

export default async function Home() {
  const data = await videoService.getVideosByCategory(EVideoCategory.TRENDING)

  return (
    <section>
      <section>
        <CatergoryHeading icon={Flame}>Trending</CatergoryHeading>
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
