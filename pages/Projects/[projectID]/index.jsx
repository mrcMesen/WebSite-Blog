import React from 'react';
import { Layout } from '$layout';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ImagesSet } from '$components/ImagesSet';

import { useStyles } from './styles';
export default function Project() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Typography variant='h4' color='primary' className={classes.center} paragraph={true}>
          Project Title
        </Typography>
        <Typography variant='body2' color='primary' className={classes.justify} paragraph={true}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Typography>
        <section className={classes.techUsed}>
          {['react', 'node', 'materialui', 'firebase'].map(item => (
            <img key={item} src={`/icons/techs/${item}.png`} alt='' className={classes.iconTech} />
          ))}
        </section>
        <ImagesSet />
      </Container>
    </Layout>
  );
}
