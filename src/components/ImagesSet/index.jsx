import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { useStyles } from './styles';
export const ImagesSet = ({ images }) => {
  const classes = useStyles();
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className={classes.content}>
      <img className={classes.activeImage} src='../assets/projects/qr/home.png' alt='' draggable={false} />
      <div className={classes.wrapperSmallImages}>
        {[1, 2, 3, 4, 5].map(item => (
          <img
            key={item}
            onClick={() => setActiveImage(0)}
            className={classes.smallImage}
            src='../assets/projects/qr/home.png'
            alt=''
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};
