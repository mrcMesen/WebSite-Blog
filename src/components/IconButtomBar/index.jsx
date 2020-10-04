import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import WidgetsIcon from '@material-ui/icons/Widgets';
import TimelineIcon from '@material-ui/icons/Timeline';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
export const IconButtomBar = () => {
  const classes = useStyles();
  const [activePath, setActivePath] = useState('');
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getActivePath();
  }, []);

  const getActivePath = () => {
    if (!confirm) {
      console.log('Pathname: ', router.pathname);
      switch (router.pathname) {
        case '/Projects':
          setActivePath('Projects');
          break;
        case '/Projects/[projectID]':
          setActivePath('Projects');
          break;
        case '/AboutMe':
          setActivePath('AboutMe');
          break;
        case '/Home':
          setActivePath('Home');
          break;
        case '/Timeline':
          setActivePath('Timeline');
          break;
        case '/Blog':
          setActivePath('Blog');
          break;
      }
    }
  };

  const changeActive = nActive => {
    setActivePath(nActive);
  };

  return (
    <div className={classes.content}>
      <div className={classes.wrapperIcon} onMouseLeave={getActivePath}>
        <Link href='/Projects'>
          <a>
            <WidgetsIcon
              className={clsx(classes.icon, activePath === 'Projects' ? classes.activePath : {})}
              fontSize='large'
              color='primary'
              onMouseOver={() => changeActive('Projects')}
              onClick={() => setConfirm(true)}
            />
          </a>
        </Link>
        <Link href='/AboutMe'>
          <a>
            <PersonPinIcon
              className={clsx(classes.icon, activePath === 'AboutMe' ? classes.activePath : {})}
              fontSize='large'
              color='primary'
              onMouseOver={() => changeActive('About Me')}
              onClick={() => setConfirm(true)}
            />
          </a>
        </Link>
        <Link href='/Home'>
          <a>
            <HomeIcon
              className={clsx(classes.icon, activePath === 'Home' ? classes.activePath : {})}
              fontSize='large'
              color='primary'
              onMouseOver={() => changeActive('Home')}
              onClick={() => setConfirm(true)}
            />
          </a>
        </Link>
        <Link href='/Timeline'>
          <a>
            <TimelineIcon
              className={clsx(classes.icon, activePath === 'Timeline' ? classes.activePath : {})}
              fontSize='large'
              color='primary'
              onMouseOver={() => changeActive('Timeline')}
              onClick={() => setConfirm(true)}
            />
          </a>
        </Link>
        <Link href='/Blog'>
          <a>
            <CodeIcon
              className={clsx(classes.icon, activePath === 'Blog' ? classes.activePath : {})}
              fontSize='large'
              color='primary'
              onMouseOver={() => changeActive('Blog')}
              onClick={() => setConfirm(true)}
            />
          </a>
        </Link>
      </div>
      <Typography variant='body2' className={classes.buttomName}>
        {activePath}
      </Typography>
    </div>
  );
};
