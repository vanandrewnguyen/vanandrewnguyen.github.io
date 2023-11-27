import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import ProjectCard from '../components/ProjectCard';
import ImageGallery from '../components/ImageGallery';

import * as proj from '../js/projectData';

const ProjectsPage = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const pageWidth = '65vw';
  const bodyText = "I really enjoy understanding the math and design behind computer graphics models. Working with graphics allows me to shift perspectives from artist to designer to researcher, and it's one of the few areas of study I've been forced to learn major theory outside of computer science; colour theory, physics models, aesthetic design.";
  const body2Text = "I've also worked with games in the past, and throughout university, have dabbled with full stack applications too."

  const handleToggle = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
              <ProjectCard props={proj.projRaytracer} expanded={expandedCardIndex === proj.projRaytracer.index} onToggle={() => handleToggle(proj.projRaytracer.index)}/>
            </Grid>
            <Grid item xs={6}>
              <ProjectCard props={proj.projRasterizer} expanded={expandedCardIndex === proj.projRasterizer.index} onToggle={() => handleToggle(proj.projRasterizer.index)}/>
            </Grid>
          </Grid>
        </Box>

      <Box section="section" sx={{ my: 1 }}>
        <Typography variant="h4" sx={{ my: 1 }}>Shaders</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderPathtracer} expanded={expandedCardIndex === proj.shaderPathtracer.index} onToggle={() => handleToggle(proj.shaderPathtracer.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderWater} expanded={expandedCardIndex === proj.shaderWater.index} onToggle={() => handleToggle(proj.shaderWater.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderMountain} expanded={expandedCardIndex === proj.shaderMountain.index} onToggle={() => handleToggle(proj.shaderMountain.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderVolumetric} expanded={expandedCardIndex === proj.shaderVolumetric.index} onToggle={() => handleToggle(proj.shaderVolumetric.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderGOF} expanded={expandedCardIndex === proj.shaderGOF.index} onToggle={() => handleToggle(proj.shaderGOF.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.shaderPlanet} expanded={expandedCardIndex === proj.shaderPlanet.index} onToggle={() => handleToggle(proj.shaderPlanet.index)}/>
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
              <ProjectCard props={proj.videoMountain} expanded={expandedCardIndex === proj.videoMountain.index} onToggle={() => handleToggle(proj.videoMountain.index)}/>
            </Grid>
            <Grid item xs={6}>
              <ProjectCard props={proj.videoWater} expanded={expandedCardIndex === proj.videoWater.index} onToggle={() => handleToggle(proj.videoWater.index)}/>
            </Grid>
          </Grid>
        </Box>

        <Box section="section" sx={{ my: 1 }}>
          <Typography variant="h4" sx={{ my: 1 }}>Game Development</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
            <Grid item xs={4}>
              <ProjectCard props={proj.gameTFTFU} expanded={expandedCardIndex === proj.gameTFTFU.index} onToggle={() => handleToggle(proj.gameTFTFU.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.gameKadent} expanded={expandedCardIndex === proj.gameKadent.index} onToggle={() => handleToggle(proj.gameKadent.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.gameHorde} expanded={expandedCardIndex === proj.gameHorde.index} onToggle={() => handleToggle(proj.gameHorde.index)}/>
            </Grid>
          </Grid>
        </Box>

        <Box section="section" sx={{ my: 1 }}>
          <Typography variant="h4" sx={{ my: 1 }}>University</Typography>
          <Grid container spacing={1} style={{ width: pageWidth }}>
            <Grid item xs={4}>
              <ProjectCard props={proj.projPatterns} expanded={expandedCardIndex === proj.projPatterns.index} onToggle={() => handleToggle(proj.projPatterns.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projDungeonMania} expanded={expandedCardIndex === proj.projDungeonMania.index} onToggle={() => handleToggle(proj.projDungeonMania.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projSeams} expanded={expandedCardIndex === proj.projSeams.index} onToggle={() => handleToggle(proj.projSeams.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projAirbrb} expanded={expandedCardIndex === proj.projAirbrb.index} onToggle={() => handleToggle(proj.projAirbrb.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projDNS} expanded={expandedCardIndex === proj.projDNS.index} onToggle={() => handleToggle(proj.projDNS.index)}/>
            </Grid>
            <Grid item xs={4}>
              <ProjectCard props={proj.projPortfolio} expanded={expandedCardIndex === proj.projPortfolio.index} onToggle={() => handleToggle(proj.projPortfolio.index)}/>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </div>
  );
};

export default ProjectsPage;
