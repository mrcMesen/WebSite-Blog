import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  line: {
    height: 50,
    width: 1,
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const VerticalDivider = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.line} />
    </div>
  );
};
