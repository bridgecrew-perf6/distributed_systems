import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const pages = ['Tests', 'Organisation', 'Schedule', 'Accounts'];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  const navigateToPage = (p) => {
      console.log(`Going to ${p}`)
      navigate(`/${p}`)
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            Testicle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => navigateToPage(page)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          / TODO: Add drop down menu for login profile etc.
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;