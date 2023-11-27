import React from 'react';

import { Box, Typography, Chip } from '@mui/material';

const AboutPage = () => {
  const pageWidth = '65vw';
  const array1 = ['C++', 'C', 'Python', 'GLSL', 'HTML/CSS', 'SQL', 'React'];
  const array2 = ['Bash', 'Java', 'JS/TS', 'OpenGL', 'Unreal Engine'];

  return (
    <div>
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box style={{ width: pageWidth }}>
          <Box section="section" sx={{ my: 2 }}>
            <Typography variant="h2" sx={{ my: 2 }}>Hey!</Typography>
            <Typography variant="body1">My name's Van Andrew and I'm a CS undergrad at the University of New South Wales.</Typography>
            <Typography variant="body1">I'm a current software engineering intern at DreamWorks Animation.</Typography>
            <Typography variant="body1">I've a strong background in application development, and am recently self-studying computer graphics.</Typography>
            <Typography variant="body1">In my spare time I like working on new shaders, or training brazilian jiu jitsu.</Typography>
          </Box>
          <Box section="section" sx={{ mt: 1 }}>
            <Typography variant="body1">Preferred languages and tech stacks:</Typography>
          </Box>
          <Box section="section" sx={{ my: 1 }} display="flex" flexDirection="row">
            {array1.map((text) => (
              <Chip key={text} label={text} variant="filled" sx={{ mr: 1 }}/>
            ))}
          </Box>
          <Box section="section" sx={{ mt: 1 }}>
            <Typography variant="body1">Things I'm still learning:</Typography>
          </Box>
          <Box section="section" sx={{ my: 1 }} display="flex" flexDirection="row">
            {array2.map((text) => (
              <Chip key={text} label={text} variant="outlined" sx={{ mr: 1 }}/>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutPage;
