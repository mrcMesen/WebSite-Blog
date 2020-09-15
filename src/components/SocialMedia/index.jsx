import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SvgIcon from '@material-ui/core/SvgIcon';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';

const StackOverFlow = props => (
  <SvgIcon {...props}>
    <path d='m6.444 14.839 10.338 2.196.433-2.089-10.338-2.212z' />
    <path d='m6.215 17.571h10.566v2.127h-10.566z' />
    <path d='m7.8 9.831 9.572 4.526.887-1.944-9.577-4.538z' />
    <path d='m17.373 14.358-.001-.001-.001.001z' />
    <path d='m2 15.429v8.571h18.992v-8.571h-2.113v6.428h-14.766v-6.428z' />
    <path d='m10.453 5.063 8.109 6.873 1.346-1.65-8.109-6.873z' />
    <path d='m22 8.587-6.302-8.587-1.691 1.286 6.302 8.587z' />
  </SvgIcon>
);

import { useStyles } from './styles';
export const SocialMedia = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div>
        <p className={classes.info}>
          <small>marco.mesenc@hotmail.com +506 8628 9397</small>
        </p>
      </div>
      <div className={classes.wrapperIcons}>
        <a href='https://github.com/mrcMesen'>
          <IconButton>
            <GitHubIcon className={classes.icon} color='secondary' />
          </IconButton>
        </a>
        <a href='https://stackoverflow.com/users/story/9226510'>
          <IconButton>
            <StackOverFlow className={classes.icon} color='secondary' />
          </IconButton>
        </a>
        <a href='https://twitter.com/mrcMesen'>
          <IconButton>
            <TwitterIcon className={classes.icon} color='secondary' />
          </IconButton>
        </a>
        <a href='https://wa.me/50686289397'>
          <IconButton>
            <WhatsAppIcon className={classes.icon} color='secondary' />
          </IconButton>
        </a>
        <a href='mailto:marcokse@hotmail.es'>
          <IconButton>
            <MailIcon className={classes.icon} color='secondary' />
          </IconButton>
        </a>
        <a href='tel:50686289397'>
          <IconButton>
            <PhoneIcon className={classes.icon} color='secondary' />
          </IconButton>
        </a>
      </div>
    </div>
  );
};
