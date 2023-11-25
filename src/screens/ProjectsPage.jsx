import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

import ProjectCard from '../components/ProjectCard';
import ImageGallery from '../components/ImageGallery';

import * as proj from '../js/projectData';

const ProjectsPage = () => {
  const pageWidth = '65vw';
  const bodyText = "I really enjoy understanding the math and design behind computer graphics models. Working with graphics allows me to shift perspectives from artist to designer to researcher, and it's one of the few areas of study I've been forced to learn major theory outside of computer science; colour theory, physics models, aesthetic design.";
  const body2Text = "I've also worked with games in the past, and throughout university, have dabbled with full stack applications too."

  return (
    <div>
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        <Box section="section" sx={{ my: 1 }} style={{ width: pageWidth }}>
          <Typography variant="h3" sx={{ my: 1 }}>Projects</Typography>
          <Typography variant="body1">{bodyText}</Typography>
          <Typography variant="body1">{body2Text}</Typography>
        </Box>
        
        <Box section="section" sx={{ my: 1 }}>
          <Typography variant="h4" sx={{ my: 1 }}>Rendering</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
            <Grid item xs={6}>
              <ProjectCard props={proj.projRaytracer} />
            </Grid>
            <Grid item xs={6}>
              <ProjectCard props={proj.projRasterizer} />
            </Grid>
          </Grid>
        </Box>

      <Box section="section" sx={{ my: 1 }}>
        <Typography variant="h4" sx={{ my: 1 }}>Shaders</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
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
        </Box>

        <Box section="section" sx={{ my: 1 }}>
          <Typography variant="h5" sx={{ my: 1 }}>Shader Gallery</Typography>
          <ImageGallery gallery={proj.shaderGallery} />
        </Box>

        <Box section="section" sx={{ my: 2 }}>
          <Typography variant="h5" sx={{ my: 1 }}>Shader Breakdown</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
            <Grid item xs={6}>
              <ProjectCard props={proj.videoMountain} />
            </Grid>
            <Grid item xs={6}>
              <ProjectCard props={proj.videoWater} />
            </Grid>
          </Grid>
        </Box>

        <Box section="section" sx={{ my: 1 }}>
          <Typography variant="h4" sx={{ my: 1 }}>Game Development</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
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

        <Box section="section" sx={{ my: 1 }}>
          <Typography variant="h4" sx={{ my: 1 }}>University</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
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
            <Grid item xs={4}>
              <ProjectCard props={proj.projPortfolio} />
            </Grid>
          </Grid>
        </Box>

      </Box>
    </div>
  );
};

export default ProjectsPage;
