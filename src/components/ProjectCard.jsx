import React, { useState } from 'react';
import { Card, CardContent, Grid, Box, Typography } from '@mui/material';

const ProjectCard = ({ props }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }} onClick={handleToggle}>
        <CardContent>
          <Typography variant="body1">
            {props.name}
          </Typography>
          <Typography variant="h5" component="div">
            Click me to reveal more information
          </Typography>
          {expanded && (
            <div>
              <Typography color="text.secondary">
                Additional information goes here.
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
