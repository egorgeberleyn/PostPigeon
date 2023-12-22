import { Box, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import LoginForm from '../components/Forms/LoginForm'
import loginBg from '../images/loginPageBg.png'
import pigeonImg from '../images/pigeon.png'

const LoginPage: React.FC = () => {
  return (
    <Box sx={{ background: `url(${loginBg})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> 
        <Stack direction="row" justifyContent='space-evenly' alignItems='center' height='100%' sx={{ backdropFilter: 'blur(2px)' }}>
          
          <Stack direction='column' spacing={3} alignItems='center'>
            <Box component='img' src={pigeonImg} sx={{ width: '200px'}}></Box>
            <Typography variant='h3' color='info.main'>Post Pigeon</Typography>
            <Typography variant='subtitle1' sx={{color: 'lightgray'}}>Web chat developed on gRPC/React stack</Typography>
          </Stack>
          
          <LoginForm />
        
        </Stack>
    </Box>
  )
}
export default LoginPage;