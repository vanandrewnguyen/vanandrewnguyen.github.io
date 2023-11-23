import React from 'react';
import { Box, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <div> 
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" justifyContent="center">
        <Typography variant="h1">Home</Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
