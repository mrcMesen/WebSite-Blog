import React, { useState, useEffect } from 'react';
import Firestore from '../../services/firestore';
import Storage from '../../services/storage';
import { Layout } from '$layout';

import { ProjectCard } from '$components/ProjectCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  center: {
    textAlign: 'center',
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  projects: {
    width: '100%',
    height: '100%',
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let stillMounted = true;
    const getProjects = async () => {
      const firestore = new Firestore('Projects');
      const storage = new Storage();
      const listProjects = await firestore.readAll();
      const finalListProjects = [];
      for (let project of listProjects) {
        // console.log(`projects/${project.id}`);
        const urlImage = await storage.read(`projects/${project.id}`, project.image);
        finalListProjects.push({ ...project, image: urlImage || '' });
      }
      stillMounted && setProjects(finalListProjects);
    };
    getProjects();
    return () => {
      stillMounted = false;
    };
  }, []);

  return (
    <Layout loading={projects.length === 0}>
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
        <section>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </Container>
    </Layout>
  );
}
