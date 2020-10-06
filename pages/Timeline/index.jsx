import React, { useState, useEffect } from 'react';
import Firestore from '$services/firestore';
import { Layout } from '$layout';

import Container from '@material-ui/core/Container';
import { TimeEvent } from '$components/TimeEvent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    position: 'relative',
    margin: 'auto',
    width: 500,
    [theme.breakpoints.down('md')]: {
      width: 250,
    },
  },
  line: {
    position: 'absolute',
    height: '100%',
    width: 1,
    background: theme.palette.secondary.main,
    opacity: 0.4,
    right: 7.5,
  },
  start: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 7.5,
    background: theme.palette.primary.main,
    right: 0,
  },
  end: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 7.5,
    background: theme.palette.primary.main,
    right: 0,
    bottom: 0,
  },
  contentEvents: {
    padding: '25px 0px',
  },
}));

export default function Timeline() {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let stillMounted = true;
    const getProject = async () => {
      const firestore = new Firestore('TimeLineEvents');
      const allEvents = await firestore.readAll();
      console.log('events', allEvents);
      stillMounted && setEvents(allEvents);
      // setEvents(allEvents);
    };
    getProject();
    return () => {
      stillMounted = false;
    };
  }, []);

  return (
    <Layout>
      <Container maxWidth='lg'>
        <div className={classes.content}>
          <div className={classes.line} />
          <div className={classes.start} />
          <div className={classes.end} />
          <div className={classes.contentEvents}>
            {events.length !== 0 && events.map(event => <TimeEvent key={event.id} event={event} />)}
            {/* <TimeEvent
              type='Education'
              dateToStart='00/01/2020'
              dateToEnd='01/02/2020'
              title='System Information Degree'
              subTitle='System Information Degree'
              skills={['Comunication', 'Test']}
            />
            <TimeEvent
              type='Job'
              dateToStart='00/01/2020'
              dateToEnd='01/02/2020'
              title='System Information Degree'
              subTitle='System Information Degree'
              skills={['Comunication', 'Test']}
            /> */}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
