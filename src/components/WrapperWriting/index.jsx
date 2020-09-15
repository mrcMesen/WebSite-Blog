import React, { useState } from 'react';
import clsx from 'clsx';
import { WriteSkill } from '$components/WriteSkill';

import { useStyles } from './styles';
export const WrapperWriting = () => {
  const [active, setActive] = useState(1);
  const classes = useStyles();
  const handleNext = () => {
    setTimeout(() => {
      setActive(preActive => preActive + 1);
    }, 500);
  };

  return (
    <div className={classes.content}>
      <WriteSkill fullText='FRONTEND' nextText={handleNext} textStyles={clsx(classes.frontEnd, classes.text)} />
      {active >= 2 && (
        <WriteSkill
          fullText='ReactJS - MaterialUI - WebPack - Babel - Bootstrap'
          nextText={handleNext}
          textStyles={classes.text}
        />
      )}
      {active >= 3 && (
        <WriteSkill fullText='BACKEND' nextText={handleNext} textStyles={clsx(classes.backEnd, classes.text)} />
      )}
      {active >= 4 && (
        <WriteSkill
          fullText='NodeJS- Express - C# - MVC .net - MongoDB - SQL'
          nextText={handleNext}
          textStyles={classes.text}
        />
      )}
      {active >= 5 && (
        <WriteSkill fullText='MOBILE' nextText={handleNext} textStyles={clsx(classes.mobile, classes.text)} />
      )}
      {active >= 6 && (
        <WriteSkill
          fullText='React Native with Expo - Flutter (learning)'
          nextText={() => {}}
          textStyles={classes.text}
        />
      )}
    </div>
  );
};
