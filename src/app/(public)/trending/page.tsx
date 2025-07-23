import { CatergoryHeading, VideoCard, VideoGridLayout } from '@components'
import { PUBLIC_ROUTES } from '@config/app'
import { EVideoCategory } from '@services'
import { videoService } from '@services/video/service'
import { Flame } from 'lucide-react'
import { Metadata } from 'next'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
  description: 'App for video watching',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${PUBLIC_ROUTES.TRENDING}`
  },
  openGraph: {
    title: 'Tube Platform',
    description: 'App for video watching',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${PUBLIC_ROUTES.TRENDING}`,
    siteName: 'Tube Platform',
    type: 'website'
  }
}

export default async function Home() {
  const data = await videoService.getVideos({ category: EVideoCategory.TRENDING })

  return (
    <section>
      <div>
        <CatergoryHeading icon={Flame}>Trending</CatergoryHeading>
        <VideoGridLayout>
          {data?.map(props => (
            <VideoCard
              key={props.id}
              {...props}
            />
          ))}
        </VideoGridLayout>
      </div>
    </section>
  )
}
