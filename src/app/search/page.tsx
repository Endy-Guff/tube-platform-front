import { NO_INDEX_PAGE } from '@common/consts'
import { CatergoryHeading } from '@components'
import { SearchIcon } from 'lucide-react'
import { Metadata } from 'next'

import { Videos } from './_components'

interface IProps {
  searchParams: Promise<{ search: string }>
}

export const generateMetadata = async ({ searchParams }: IProps): Promise<Metadata> => {
  const { search } = await searchParams

  return {
    title: search,
    ...NO_INDEX_PAGE
  }
}

export default async function Search({ searchParams }: IProps) {
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
