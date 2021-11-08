import type { NextPage } from 'next';
import Background from '../components/background';
import Icon from '../components/icon';
import Layout from '../components/layout';
import MainHeader from '../components/mainHeader';
import Name from '../components/name';

const Home: NextPage = () => {
  return (
    <Layout title='home'>
      <Background />
      <MainHeader />
      <Name />
      <Icon />
    </Layout>
  );
};

export default Home;
