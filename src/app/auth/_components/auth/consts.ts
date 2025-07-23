import { ETab } from 'app/auth/types'

export const TABS: { tabName: ETab; title: string }[] = [
  {
    tabName: ETab.SIGN_IN,
    title: 'Sign In'
  },
  {
    tabName: ETab.SIGN_UP,
    title: 'Sign Up'
  }
]
