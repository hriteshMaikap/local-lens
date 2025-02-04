import { Box, Container } from '@mui/material'
import Navbar from '../common/Navbar'

const MainLayout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Container component="main" sx={{ mt: 4 }}>
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout