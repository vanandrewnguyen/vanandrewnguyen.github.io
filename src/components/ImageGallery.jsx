import React from 'react';

import { ImageList, ImageListItem } from '@mui/material';

const ImageGallery = (gallery) => {
  if (!Array.isArray(gallery.gallery)) {
    return (<></>);
  }

  const itemData = gallery.gallery.map((img, index) => ({
    img,
    title: `Image ${index + 1}`,
    cols: 1,
    rows: 1,
  }));
  
  const srcset = (img, rowHeight, rows, cols) => {
    return {
      src: img,
      rows,
      cols,
      rowHeight,
    };
  };

  return (
    <ImageList variant="quilted" cols={4} style={{ width: '65vw' }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImageGallery;
