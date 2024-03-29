import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

import ProjectCard from '../components/ProjectCard';
import ImageGallery from '../components/ImageGallery';

import * as proj from '../js/projectData';

const ProjectsPage = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const pageWidth = '65vw';
  const bodyText = "I love working with multimedia. There's something about the feedback loop you get that is so satisfying, iterating on small sub-sections of an idea brought to life with simple programming.";
  const body2Text = "Working with games, graphics and computer science as a whole really fulfils this feeling, and I hope you can see it in my projects below!"

  const handleToggle = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollTo = (height) => {
    setExpandedCardIndex(null);
    scroll.scrollTo(height, { smooth: true, offset: -50 });
  }

  return (
    <div>
      <Box section="section" sx={{ p: 1, m: 1 }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        <Box section="section" sx={{ my: 2 }} style={{ width: pageWidth }}>
          <Typography variant="h2" sx={{ my: 2 }}>Projects</Typography>
          <Typography variant="body1">{bodyText}</Typography>
          <Typography variant="body1">{body2Text}</Typography>
        </Box>

        <Box section="section" sx={{ my: 2 }} style={{ width: pageWidth }} display="flex" flexDirection="row" justifyContent="left" alignItems="left">
          <Button variant="outlined" color="primary" onClick={() => scrollTo(350)}>Rendering</Button>
          <Button variant="outlined" color="primary" onClick={() => scrollTo(590)}>Shaders</Button>
          <Button variant="outlined" color="primary" onClick={() => scrollTo(1200)}>Videos</Button>
          <Button variant="outlined" color="primary" onClick={() => scrollTo(1400)}>Games</Button>
          <Button variant="outlined" color="primary" onClick={() => scrollTo(1600)}>University</Button>
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
