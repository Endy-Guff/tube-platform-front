import { IVideo } from '../video'

export interface IChannel {
  id: string
  slug: string
  description: string
  isVerified: boolean
  avatarUrl: string
  bannerUrl: string
  // user   User   @relation("user_channel", fields: [userId], references: [id], onDelete: Cascade)
  userId: string
  videos: IVideo[]
  // subscribers User[]
  createdAt: string
  updatedAt: string
}
