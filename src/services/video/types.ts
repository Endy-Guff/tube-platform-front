import { IChannel } from '../channel'

export enum EVideoCategory {
  EXPLORE = 'explore',
  TRENDING = 'trending'
}

export interface IVideo {
  id: string
  publicId: string
  title: string
  description: string
  thumbnailUrl: string
  videoFileName: string
  maxResolution: string
  viewsCount: number
  isPublic: boolean
  createdAt: string
  updatedAt: string
  channelId: string
  channel: IChannel
  // likes    VideoLike[]
  // comments VideoComment[]
  // tags     VideoTag[]     @relation("video_tags")

  // playlists Playlist[]

  // watchHistories WatchHistory[]
}
