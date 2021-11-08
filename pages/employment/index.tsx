import type { NextPage } from 'next';
import Layout from '../../components/layout';
import { employment, Job } from '../../lib/employment';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Work = (job: Job) => {
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>
        <h2>{job.company}</h2>
        <h3>{job.position}</h3>
        <p>
          {job.dates.from} - {job.dates.to}
        </p>
      </header>

      <Link href={job.link} passHref>
        <a target='_blank'>
          <Image
            className={styles.cardImage}
            src={job.image}
            alt={job.company}
            height='150px'
            width='150px'
          />
        </a>
      </Link>

      <p className={styles.cardDescription}>{job.description}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Employment History</h1>
      <p>Click on the company logo to be taken to the website.</p>
    </div>
  );
};

const Employment: NextPage = () => {
  return (
    <Layout title='Employment'>
      <div className={styles.container}>
        <Header />

        <div className={styles.cardContainer}>
          {employment
            .map((job, index) => {
              return <Work key={index} {...job} />;
            })
            .reverse()}
        </div>
      </div>
    </Layout>
  );
};

export default Employment;
