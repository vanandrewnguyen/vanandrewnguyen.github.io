import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PersonIcon from '@mui/icons-material/Person';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Van Andrew Nguyen</Link>
          </Typography>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}><Button variant='active' title='Projects'><CodeIcon /></Button></Link>
            <Link to="/art" style={{ textDecoration: 'none', color: 'inherit' }}><Button variant='active' title='Art'><ColorLensIcon /></Button></Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><Button variant='active' title='About'><PersonIcon /></Button></Link>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Nav;
