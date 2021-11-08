import type { NextPage } from 'next';
import styles from './styles.module.scss';

interface MainHeader {
  children: React.ReactNode;
}

const MainHeader: NextPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Frontend Developer</p>
      <p className={styles.tag}>Future Full Stack Developer</p>
    </div>
  );
};

export default MainHeader;
