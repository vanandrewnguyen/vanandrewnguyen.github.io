import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import * as proj from '../js/projectData';

const ProjectsPage = () => {
  

  return (
    <div>
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        <Typography variant="h3">Projects</Typography>
        <Typography variant="body1">AOUBSDOBASDOIBAOSIDBOIBASDOIB</Typography>
        
        <Box section="section">
          <Typography variant="h4">Rendering</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ProjectCard props={proj.projRaytracer} />
            </Grid>
            <Grid item xs={6}>
              <ProjectCard props={proj.projRasterizer} />
            </Grid>
          </Grid>
        </Box>

        <Box section="section">
          <Typography variant="h4">Shaders</Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderPathtracer} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderWater} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderMountain} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderVolumetric} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderGOF} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderPlanet} />
            </Grid>
          </Grid>

          <Typography variant="h5">Shader Gallery</Typography>

          <Typography variant="h5">Shader Breakdown</Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ProjectCard props={proj.videoMountain} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.videoWater} />
            </Grid>
          </Grid>

        </Box>

        <Box section="section">
          <Typography variant="h4">Game Development</Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ProjectCard props={proj.gameTFTFU} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.gameKadent} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.gameHorde} />
            </Grid>
          </Grid>
        </Box>

        <Box section="section">
          <Typography variant="h4">University</Typography>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ProjectCard props={proj.projPatterns} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projDungeonMania} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projSeams} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projAirbrb} />
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projDNS} />
            </Grid>
          </Grid>
        </Box>

      </Box>
    </div>
  );
};

export default ProjectsPage;
