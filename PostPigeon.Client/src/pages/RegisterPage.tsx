import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm'
import loginBg from '../images/loginPageBg.png'
import logo from '../images/pigeon.png'

const RegisterPage: React.FC = () => {
    return (
        <Box sx={{ background: `url(${loginBg})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Stack direction="row" justifyContent='space-evenly' alignItems='center' height='100%' sx={{ backdropFilter: 'blur(2px)' }}>

                <Stack direction='column' spacing={3} alignItems='center'>
                    <Box component='img' src={logo} sx={{ width: '200px'}}></Box>
                    <Typography variant='h3' color='info.main'>Post Pigeon</Typography>
                    <Typography variant='subtitle1' sx={{ color: 'lightgray' }}>Web chat developed on gRPC/React stack</Typography>
                </Stack>

                <RegisterForm />

            </Stack>
        </Box>
    )
}

export default RegisterPage;