'use client'

import { Box, Button, Typography } from '@components'
import { BUTTON_TEXT, FORM_ID } from 'app/auth/consts'
import { ETab } from 'app/auth/types'
import cn from 'clsx'
import { MouseEventHandler, useState } from 'react'

import { SignIn } from '../sign-in'
import { SignUp } from '../sign-up'

import { TABS } from './consts'
import { isTab } from './helper'

import styles from './styles.module.scss'

export const Auth = () => {
  const [tab, setTab] = useState<ETab>(ETab.SIGN_IN)

  const handleTabChange: MouseEventHandler<HTMLButtonElement> = e => {
    const value = e.currentTarget.value
    if (!isTab(value)) return

    setTab(value)
  }

  return (
    <Box
      className={styles.auth}
      direction='column'
      justifyContent='center'
      alignItems='center'
      gap='1rem'
    >
      <Box gap='0.5rem'>
        {TABS.map(({ tabName, title }) => (
          <button
            key={tabName}
            className={cn(styles.button, { [styles.active]: tab === tabName })}
            onClick={handleTabChange}
            value={tabName}
          >
            <Typography.TEXT>{title}</Typography.TEXT>
          </button>
        ))}
      </Box>
      {tab === ETab.SIGN_IN && <SignIn />}
      {tab === ETab.SIGN_UP && <SignUp />}
      <Button form={FORM_ID}>{BUTTON_TEXT[tab]}</Button>
    </Box>
  )
}
