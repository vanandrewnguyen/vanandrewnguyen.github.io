import React from 'react';
import { Card, CardContent, CardActionArea, CardMedia, Chip, Box, Typography, Button, Link } from '@mui/material';

const ProjectCard = ({ props, expanded, onToggle }) => {
  const defaultImg = require('../images/rendering/render2.png');

  return (
    <>
      <Card onClick={onToggle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={expanded ? "120" : "80"}
            image={props.thumb ?? defaultImg}
            alt={props.name + ' image'}
          />
          <CardContent>
            <Typography variant="h5" component="div">{props.name}</Typography>
            {!expanded && <Typography variant="body1" component="div">Show more</Typography>}
            {expanded && (
              <div>
                <Typography variant="body1">Status: {props.status}</Typography>
                <Box section="section" display="flex" flexDirection="row" sx={{ my: 1 }}>
                  {props.tech.map((text) => (
                    <Chip key={text} label={text} variant="outlined" sx={{ mr: 1 }}/>
                  ))}
                </Box>
                <Box section="section" sx={{ my: 1 }}>
                  <Typography color="text.secondary">{props.description}</Typography>
                </Box>
                <Button component={Link} href={props.projectLink} variant={props.projectLink ? "contained" : "outlined"} color="primary">
                  {props.projectLink ? 'Project Link' : 'No link'}
                </Button>
              </div>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProjectCard;
