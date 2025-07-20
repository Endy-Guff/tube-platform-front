import { Box, Typography } from '@components'

function NotFound() {
  return (
    <Box
      className='not-found'
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typography.TITLE1>404</Typography.TITLE1>
      <Typography.TEXT>Page not found</Typography.TEXT>
    </Box>
  )
}

export default NotFound
