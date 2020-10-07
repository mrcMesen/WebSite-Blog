import React from 'react';
import clsx from 'clsx';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

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
        <Divider className={clsx(classes.line, type === 'Job' ? classes.jobLine : classes.educationLine)} />
        <Typography variant='subtitle1' color='primary' className={classes.title}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant='caption'>{subTitle.toUpperCase()}</Typography>
        <div className={classes.contentSkills}>
          {skills.sort().map(skill => (
            <Chip
              key={skill}
              label={skill}
              color='secondary'
              size='small'
              className={type === 'Job' ? classes.chipJob : classes.chipEducation}
            />
          ))}
        </div>
        {type === 'Job' ? <WorkIcon className={classes.iconTypeBg} /> : <SchoolIcon className={classes.iconTypeBg} />}
      </div>
      <PlayArrowIcon className={clsx(classes.arrow, type === 'Job' ? classes.arrowJob : classes.arrowEducation)} />
    </div>
  );
};
