import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import WidgetsIcon from '@material-ui/icons/Widgets';
import SchoolIcon from '@material-ui/icons/School';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
export const IconButtomBar = () => {
  const [activePath, setActivePath] = useState('Home');
  const classes = useStyles();

  useEffect(() => {
    getActivePath();
  }, []);

  const getActivePath = () => {
    //get route
    setActivePath('Home');
  };

  const changeActive = nActive => {
    setActivePath(nActive);
  };

  return (
    <div className={classes.content}>
      <div className={classes.wrapperIcon} onMouseLeave={getActivePath}>
        <WidgetsIcon
          className={clsx(classes.icon, activePath === 'Projects' ? classes.activePath : {})}
          fontSize='large'
          color='primary'
          onMouseOver={() => changeActive('Projects')}
        />
        <PersonPinIcon
          className={clsx(classes.icon, activePath === 'About Me' ? classes.activePath : {})}
          fontSize='large'
          color='primary'
          onMouseOver={() => changeActive('About Me')}
        />
        <HomeIcon
          className={clsx(classes.icon, activePath === 'Home' ? classes.activePath : {})}
          fontSize='large'
          color='primary'
          onMouseOver={() => changeActive('Home')}
        />
        <SchoolIcon
          className={clsx(classes.icon, activePath === 'Education' ? classes.activePath : {})}
          fontSize='large'
          color='primary'
          onMouseOver={() => changeActive('Education')}
        />
        <CodeIcon
          className={clsx(classes.icon, activePath === 'Code' ? classes.activePath : {})}
          fontSize='large'
          color='primary'
          onMouseOver={() => changeActive('Code')}
        />
      </div>
      <Typography variant='body2'>{activePath}</Typography>
    </div>
  );
};
