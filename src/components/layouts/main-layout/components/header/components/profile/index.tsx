import { PRIVATE_ROUTES } from '@config'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

// TODO: add auth avatar
export const Profile = () => (
  <Link href={PRIVATE_ROUTES.SETTINGS}>
    <Image
      className={styles.profile}
      alt=''
      src='/uploads/avatars/redgroup.jpg'
      width={40}
      height={40}
    />
  </Link>
)
