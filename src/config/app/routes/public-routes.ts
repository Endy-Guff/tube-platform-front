export const PUBLIC_ROUTES = {
  EXPLORE: '/',
  TRENDING: '/trending',
  VIDEO_GAMES: '/video-games',
  MY_CHANNEL: '/my-channel',
  SUBSCRIPTIONS: '/subscriptions',
  HISTORY: '/history',
  LIKED_VIDEOS: '/liked-videos',
  FEEDBACK: '/feedback',

  SEARCH: (search: string) => `/search?search=${search}`,
  VIDEO: (path: string) => `/v/${path}`,
  CHANNEL: (path: string) => `/c/${path}`

  // // Динамические пути
  // PRODUCT: ({ id }: Required<Pick<RouteParams, 'id'>>) => `/products/${id}`,

  // // Группировка по разделам
  // AUTH: {
  //   LOGIN: '/auth/login',
  //   REGISTER: '/auth/register',
  // },
} as const
