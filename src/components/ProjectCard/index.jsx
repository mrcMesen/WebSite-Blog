import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { useStyles } from './styles';
export const ProjectCard = ({ id, title, description, link, href, image, tech, startDate, endDate }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <img src={image} alt='BG' className={classes.imagebg} />
      <section className={classes.projectInfo}>
        <Typography variant='h5'>{title}</Typography>
        {href ? (
          <a href={href}>
            <Typography variant='body1'>
              <small>{link || 'Private Project'}</small>
            </Typography>
          </a>
        ) : (
          <Typography>Private Project</Typography>
        )}
        <Typography variant='h5'>{description}</Typography>
        <div className={classes.wrapperIcons}>
          {tech.map(item => (
            <img key={item} src={`/icons/techs/${item}.png`} alt='' className={classes.techIcon} />
          ))}
        </div>
        <Link href={`/Projects/${id}`}>
          <a>
            <Button
              variant='outlined'
              color='primary'
              startIcon={<VisibilityIcon />}
              style={{ marginTop: 10 }}
              size='small'
            >
              View
            </Button>
          </a>
        </Link>
      </section>
    </div>
  );
};
