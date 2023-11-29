import React from 'react';
import { Box, Typography } from '@mui/material';

import SocialIcons from '../components/SocialIcons';

const LandingPage = () => {
  const pageWidth = '65vw';

  return (
    <div> 
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box style={{ width: pageWidth }}>
          <Box section="section" sx={{ mt: 10, mb: 2 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h5" sx={{ my: 2 }}>Van-Andrew Nguyen</Typography>
            <Typography variant="body1">Hi! I'm a Computer Science undergrad at UNSW.</Typography>
            <Typography variant="body1">Big fan of software engineering, computer graphics and game dev.</Typography>
          </Box>
          <SocialIcons align={"center"} />
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
