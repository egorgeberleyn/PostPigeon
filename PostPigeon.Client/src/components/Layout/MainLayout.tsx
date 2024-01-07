import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import NavPanel from './NavPanel'

const MainLayout = () => {
  return (
    <Box
      sx={{
        bgcolor: "#171717",
        height: "100vh",
        color: "white",
        display: "flex",
      }}
    >
        <NavPanel />
        <Outlet />
    </Box>
  )
}

export default MainLayout