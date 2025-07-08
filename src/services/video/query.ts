import { useQuery } from '@tanstack/react-query'

import { EQueryKeys } from './query-keys'
import { videoService } from './service'
import { EVideoCategory } from './types'

export const useGetVideoByCategory = <WithPagination extends boolean = false>(
  category: EVideoCategory,
  config?: { withPagination?: WithPagination }
) =>
  useQuery({
    queryKey: [EQueryKeys.GET_VIDEO_BY_CATEGORY, category],
    queryFn: () => videoService.getVideosByCategory(category, config)
  })
