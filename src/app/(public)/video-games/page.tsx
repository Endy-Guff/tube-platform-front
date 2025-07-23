import { CatergoryHeading, VideoCard, VideoGridLayout } from '@components'
import { PUBLIC_ROUTES } from '@config/app'
import { EVideoCategory } from '@services'
import { videoService } from '@services/video/service'
import { Gamepad2 } from 'lucide-react'
import { Metadata } from 'next'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
  description: 'App for video watching',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${PUBLIC_ROUTES.VIDEO_GAMES}`
  },
  openGraph: {
    title: 'Tube Platform',
    description: 'App for video watching',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${PUBLIC_ROUTES.VIDEO_GAMES}`,
    siteName: 'Tube Platform',
    type: 'website'
  }
}

export default async function Home() {
  const data = await videoService.getVideos(
    { category: EVideoCategory.GAMES },
    { withPagination: true }
  )

  return (
    <section>
      <div>
        <CatergoryHeading icon={Gamepad2}>Video Games</CatergoryHeading>
        <VideoGridLayout>
          {data?.videos.map(props => (
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
