import { Box, Button, Stack, TextField, Typography } from '@mui/material'

export default function Login() {
  return (
    <Box sx={{px: 4, py: 4, borderRadius: '10px', bgcolor: '#171717'}}>
      <form>
        <Typography variant='h4' sx={{color: 'white', textAlign: 'center'}}>Login</Typography>
        <Stack direction='column' spacing={2} sx={{mt: 4}}>
          <TextField label='Name' color='info' focused/>
          <TextField label='Password' color='info' focused/>
        </Stack>
        <Box sx={{mt: 3, display:'flex', justifyContent: 'space-around', bgColor: 'white', width: '250px'}}>
          <Button variant='contained' sx={{bgcolor: '#252525', color: 'white', px: 4}}>Log in</Button>
          <Button variant='contained' sx={{bgcolor: '#252525', color: 'white', px: 4}}>Sign in</Button>
        </Box>
      </form>
    </Box>
  )
}
