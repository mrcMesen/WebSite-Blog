import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';
export const WriteSkill = ({ fullText, nextText, textStyles }) => {
  const classes = useStyles();
  const [textCount, setTextCount] = useState(0);
  const [startToWrite, setStartToWrite] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStartToWrite(true);
    }, 2500);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (startToWrite && textCount !== fullText.length) {
      const timeOut = setTimeout(() => {
        setTextCount(actualCount => actualCount + 1);
      }, 120);
      return () => clearTimeout(timeOut);
    } else if (textCount === fullText.length) {
      nextText();
    }
  }, [startToWrite, textCount]);

  return (
    <div className={classes.content}>
      <div className={classes.wrapperWriter}>
        <p className={textStyles}>
          {fullText.substring(0, textCount)}{' '}
          <span
            className={clsx(classes.pointer, textCount !== fullText.length ? classes.writing : classes.noWriting)}
          />
        </p>
      </div>
    </div>
  );
};
