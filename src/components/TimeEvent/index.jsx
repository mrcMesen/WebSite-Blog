import React from 'react';
import clsx from 'clsx';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './styles';
export const TimeEvent = ({ event }) => {
  const classes = useStyles();
  const { type, subType, dateToStart, dateToEnd, title, subTitle, skills } = event;
  return (
    <div className={classes.content}>
      <div className={classes.contentEvent}>
        <div className={classes.contentSubTitle}>
          <Typography variant='body2' className={classes.secondaryText}>
            {subType.toUpperCase()}
          </Typography>
          <Typography variant='caption' className={classes.secondaryText}>
            <b>{dateToStart.toDate().toLocaleDateString()}</b> to{' '}
            <b>{dateToEnd ? dateToEnd.toDate().toLocaleDateString() : 'Current'}</b>
          </Typography>
        </div>
        <Divider
          className={clsx(classes.line, type === 'Job' || type === 'Project' ? classes.jobLine : classes.educationLine)}
        />
        <Typography variant='subtitle1' color='primary' className={classes.title}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant='caption'>{subTitle.toUpperCase()}</Typography>
        <div className={classes.contentSkills}>
          {skills.map(skill => (
            <Chip
              key={skill}
              label={skill}
              color='secondary'
              className={type === 'Job' || type === 'Project' ? classes.chipJob : classes.chipEducation}
            />
          ))}
        </div>
      </div>
      <PlayArrowIcon className={classes.arrow} color='primary' />
    </div>
  );
};
