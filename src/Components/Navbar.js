import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" className='navBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dion Meijboom
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#home" variant='text' onClick={handleCloseNavMenu} className="menuButton">Home</Button> 
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#aboutMe" variant='text' onClick={handleCloseNavMenu} className="menuButton">Over mij</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} href="#skills">
                  <Button href="#skills" variant='text' onClick={handleCloseNavMenu} className="menuButton">Skills</Button>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Button href="#projects" variant='text' onClick={handleCloseNavMenu} className="menuButton">Projecten</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#cv" variant='text' onClick={handleCloseNavMenu} className="menuButton">CV </Button>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dion Meijboom
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button href="#home" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button> 
              <Button href="#aboutMe" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Over mij</Button>
              <Button href="#skills" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Skills</Button>
              <Button href="#projects" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Projecten</Button>
              <Button href="#cv" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>CV </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
