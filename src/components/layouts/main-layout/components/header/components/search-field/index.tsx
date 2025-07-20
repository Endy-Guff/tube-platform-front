'use client'

import { PUBLIC_ROUTES } from '@config'
import { useRouter } from 'next/navigation'
import { KeyboardEventHandler, useState } from 'react'

import styles from './styles.module.scss'

export const SearchField = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key !== 'Enter') return
    e.preventDefault()

    const value = search.trim()
    if (!value) return

    router.push(PUBLIC_ROUTES.SEARCH(value))
    setSearch('')
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        placeholder='Type to search'
        value={search}
        onKeyDown={handleKeyDown}
        onChange={e => setSearch(e.currentTarget.value)}
      />
    </div>
  )
}
