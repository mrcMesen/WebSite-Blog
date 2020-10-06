import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Firestore from '$services/firestore';
import Storage from '$services/storage';

import { Layout } from '$layout';
import { ImagesSet } from '$components/ImagesSet';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  techUsed: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      overflowX: 'scroll',
    },
  },
  iconTech: {
    margin: 8,
    height: 90,
    [theme.breakpoints.down('sm')]: {
      height: 40,
    },
  },
}));

export default function Project() {
  const classes = useStyles();
  const [project, setProject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let stillMounted = true;
    const getProject = async () => {
      const firestore = new Firestore('Projects');
      const storage = new Storage();
      const { projectID } = router.query;
      const oProject = await firestore.read(projectID);
      const nImagesRef = [];
      for (let imageName of oProject.imagesList) {
        const urlImage = await storage.read(`projects/${oProject.id}`, imageName);
        nImagesRef.push(urlImage);
      }
      stillMounted && setProject({ ...oProject, imagesList: nImagesRef });
    };
    getProject();
    return () => {
      stillMounted = false;
    };
  }, []);

  return (
    <Layout loading={project === null}>
      {project && (
        <Container maxWidth='lg'>
          <Typography variant='h4' color='primary' className={classes.center} paragraph={true}>
            {project.title}
          </Typography>
          <Typography variant='body2' color='primary' className={classes.justify} paragraph={true}>
            {project.description}
          </Typography>
          <section className={classes.techUsed}>
            {project.tech.map(item => (
              <img key={item} src={`/icons/techs/${item}.png`} alt='' className={classes.iconTech} />
            ))}
          </section>
          <ImagesSet images={project.imagesList} />
        </Container>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
