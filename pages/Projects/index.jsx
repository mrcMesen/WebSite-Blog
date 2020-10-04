import React from 'react';
import { Layout } from '$layout';

import { VerticalDivider } from '$components/VerticalDivider';
import { ProjectCard } from '$components/ProjectCard';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';
export default function Projects() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth='lg'>
        <section className={classes.title}>
          <Typography variant='h3' color='primary' className={classes.center}>
            Projects
          </Typography>
          <Typography variant='h6' className={classes.center} paragraph={true}>
            Main projects that I have developed
          </Typography>
        </section>
        {/* <VerticalDivider /> */}
        <div>
          <ProjectCard
            id={1}
            title='Quickly Reported'
            description=''
            link='www.quicklyreported.com'
            href='https://quicklyreported.com'
            image='/assets/projects/qr/qreport.png'
            startDate=''
            endDate=''
            tech={['javascript', 'react', 'materialui', 'node', 'firebase']}
          />
          <ProjectCard
            id={2}
            title='SIGE'
            description=''
            link='www.quicklyreported.com'
            href=''
            image='/assets/projects/sige/sige.png'
            startDate=''
            endDate=''
            tech={['aspnet', 'csharp', 'mysql', 'bootstrap', 'azure']}
          />
        </div>
      </Container>
    </Layout>
  );
}
