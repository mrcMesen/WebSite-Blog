import React from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';
export const Hero = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contentHeroTitle}>
        <div className={classes.contentTitle}>
          <Typography className={classes.backgroundFont}>{'<MMC />'}</Typography>
          <Typography className={classes.fontName}>MARCO MESEN CAMPOS</Typography>
        </div>
      </div>
      <div className={classes.contentSubTitle}>
        <img className={classes.sunglasses} src='/assets/images/sunglasses.webp' alt='sunglasses' />
        <Typography className={classes.developer}>SOFTWARE DEVELOPER</Typography>
        <Typography className={classes.skills}>SKILLS</Typography>
      </div>
    </>
  );
};
