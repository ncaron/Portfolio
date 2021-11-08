import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './styles.module.scss';

const Photo: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/picture.jpg'
        width='150px'
        height='150px'
        alt='Profile photo'
      />
    </div>
  );
};

export default Photo;
