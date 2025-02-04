import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar