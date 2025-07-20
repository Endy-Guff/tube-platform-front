import { axiosInstanse } from '@config'
import { PaginationResponse } from '@services'

import { IGetVideoRequest, IVideo } from './types'

type TVideoResponse<WithPagination> = WithPagination extends true
  ? PaginationResponse<IVideo[], 'videos'>
  : IVideo[]

class VideoService {
  getVideos<WithPagination extends boolean = false>(
    { category, search }: IGetVideoRequest,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    config?: { withPagination?: WithPagination }
  ): Promise<WithPagination extends true ? PaginationResponse<IVideo[], 'videos'> : IVideo[]> {
    return axiosInstanse.get<TVideoResponse<WithPagination>, TVideoResponse<WithPagination>>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/videos${category ? '/' + category : ''}`,
      {
        params: { searchTerm: search }
      }
    )
  }
}

export const videoService = new VideoService()
