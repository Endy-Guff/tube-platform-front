import { NO_INDEX_PAGE } from '@common/consts'
import { CatergoryHeading } from '@components'
import { SearchIcon } from 'lucide-react'
import { Metadata } from 'next'

import { Videos } from './_components'

export const metadata: Metadata = {
  title: '',
  ...NO_INDEX_PAGE
}

export default async function Search({
  searchParams
}: {
  searchParams: Promise<{ search: string }>
}) {
  const { search } = await searchParams

  return (
    <section>
      <div>
        <CatergoryHeading icon={SearchIcon}>Search: {search}</CatergoryHeading>
        <Videos search={search} />
      </div>
    </section>
  )
}
