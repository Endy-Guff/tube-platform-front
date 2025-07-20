import { PaginationResponse } from '@services'
import axios from 'axios'

import { IGetVideoRequest, IVideo } from './types'

class VideoService {
  getVideos<WithPagination extends boolean = false>(
    { category, search }: IGetVideoRequest,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    config?: { withPagination?: WithPagination }
  ) {
    return axios.get<
      WithPagination extends true ? PaginationResponse<IVideo[], 'videos'> : IVideo[]
    >(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos${category ? '/' + category : ''}`, {
      params: { searchTerm: search }
    }) // todo: сделать axios конфиг
  }
}

export const videoService = new VideoService()
