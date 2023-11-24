import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const projRaytracer = {
    name: 'Raytracer',
  };

  return (
    <div>
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        <Typography variant="h2">Projects</Typography>
        <Typography variant="body1">AOUBSDOBASDOIBAOSIDBOIBASDOIB</Typography>
        
        <Box section="section">
          <Typography variant="h3">Rendering</Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant="body1">hi</Typography>
              <ProjectCard props={projRaytracer} />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">hi</Typography>
              <ProjectCard props={projRaytracer} />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">hi</Typography>
              <ProjectCard props={projRaytracer} />
            </Grid>
          </Grid>
        </Box>

        <Box section="section">
          <Typography variant="h3">Shaders</Typography>
        </Box>

        <Box section="section">
          <Typography variant="h3">Game Development</Typography>
        </Box>

        <Box section="section">
          <Typography variant="h3">University</Typography>
        </Box>

      </Box>
    </div>
  );
};

export default ProjectsPage;
