import { PaginationResponse } from '@services'
import axios from 'axios'

import { EVideoCategory, IVideo } from './types'

class VideoService {
  getVideosByCategory<WithPagination extends boolean = false>(
    category: EVideoCategory,
    config?: { withPagination?: WithPagination }
  ) {
    return axios.get<
      WithPagination extends true ? PaginationResponse<IVideo[], 'videos'> : IVideo[]
    >(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos/${category}`, {
      params: config?.withPagination ? undefined : undefined
    }) // todo: сделать axios конфиг
  }
}

export const videoService = new VideoService()
