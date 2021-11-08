import type { NextPage } from 'next';
import Background from '../../components/background';
import Icon from '../../components/icon';
import Layout from '../../components/layout';
import Photo from '../../components/photo';
import styles from './styles.module.scss';

const About: NextPage = () => {
  return (
    <Layout title='About'>
      <Background />

      <Photo />

      <p className={styles.aboutMe}>
        Hi, I'm Niko, a web developer from Canada but living in Berlin, I
        relocated here for my first ever software job and loving every bit of it
        so far! Coding is my passion, I can't stop thinking about it and I'm
        excited to continue my career as a frontend/fullstack developer.
      </p>

      <Icon />
    </Layout>
  );
};

export default About;
