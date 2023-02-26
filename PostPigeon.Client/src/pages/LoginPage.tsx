import { Box, Stack } from '@mui/material'
import Login from '../components/Login'
import loginBg from '../images/loginPageBg.png'

export default function LoginPage() {
  return (
      <Box
        component='div'
        sx={{
          backgroundImage: `url(${loginBg})`,
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'}}>
        <Stack
          direction="row"
          justifyContent='center'
          alignItems='center'
          height='100%'
          sx={{backdropFilter: 'blur(1px)'}}>
          <Login />
        </Stack>
      </Box>
  )
}
