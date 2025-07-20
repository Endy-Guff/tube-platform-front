import { useQuery } from '@tanstack/react-query'

import { EQueryKeys } from './query-keys'
import { videoService } from './service'
import { IGetVideoRequest } from './types'

export const useGetVideos = <WithPagination extends boolean = false>(
  params: IGetVideoRequest,
  config?: { withPagination?: WithPagination }
) =>
  useQuery({
    queryKey: [EQueryKeys.GET_VIDEO_BY_CATEGORY, ...Object.values(params)],
    queryFn: () => videoService.getVideos(params, config)
  })
