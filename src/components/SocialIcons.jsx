import React from 'react';
import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const SocialIcons = ({ align }) => {
  return (
    <Box section="section" display="flex" flexDirection="row" justifyContent={align} alignItems={align}>
      <a href="https://www.linkedin.com/in/van-andrew-dev" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><LinkedInIcon sx={{ mx: 0 }} /></a>
      <a href="https://github.com/vanandrewnguyen" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><GitHubIcon sx={{ mx: 1 }} /></a>
      <a href="andrew.nguyen25@outlook.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}><EmailIcon sx={{ mx: 0 }} /></a>
    </Box>
  );
}

export default SocialIcons;
