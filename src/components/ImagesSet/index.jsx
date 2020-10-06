import React, { useState } from 'react';

import { useStyles } from './styles';
export const ImagesSet = ({ images }) => {
  const classes = useStyles();
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className={classes.content}>
      <img className={classes.activeImage} src={images[activeImage]} alt='' draggable={false} />
      <div className={classes.wrapperSmallImages}>
        {images.map((item, index) => (
          <img
            key={item}
            onClick={() => setActiveImage(index)}
            className={classes.smallImage}
            src={item}
            alt=''
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};
