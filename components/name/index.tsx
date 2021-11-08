import type { NextPage } from 'next';
import styles from './styles.module.scss';

interface Name {
  children: React.ReactNode;
}

const Name: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Niko</p>
      <p>Caron</p>
    </div>
  );
};

export default Name;
