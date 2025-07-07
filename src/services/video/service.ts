import { PaginationResponse } from '@services'
import axios from 'axios'

import { EVideoCategory, IVideo } from './types'

class VideoService {
  getVideosByCategory(category: EVideoCategory) {
    console.log(process.env.NEXT_PUBLIC_SERVER_URL)

    return axios.get<PaginationResponse<IVideo[], 'videos'>>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/videos/${category}`
    ) // todo: сделать axios конфиг
  }
}

export const videoService = new VideoService()
