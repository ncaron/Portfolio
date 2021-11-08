import type { NextPage } from 'next';
import Layout from '../../components/layout';
import { employment, Job } from '../../lib/employment';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectProps, projects, ProjectsProps } from '../../lib/projects';

const getIcons = (icons: string[]) =>
  icons.map((icon) => <i key={icon} className={icon} />);

const Project = (project: ProjectProps) => {
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>
        <h3>{project.name}</h3>
        <div className={styles.icons}>{getIcons(project.icons)}</div>
      </header>

      <Link
        href={project.links.live ? project.links.live : project.links.code}
        passHref
      >
        <a target='_blank'>
          <Image
            className={styles.cardImage}
            src={project.image}
            alt={project.name}
            height='300px'
            width='300px'
          />
        </a>
      </Link>

      <Link href={project.links.code} passHref>
        <a className={styles.button} target='_blank'>
          Code & Info
        </a>
      </Link>
    </div>
  );
};

const ProjectType = ({
  description,
  projects,
  title,
}: {
  description: string;
  projects: ProjectProps[];
  title: string;
}) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className={styles.cardContainer}>
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Projects</h1>
      <p>Click on any image to be taken to the live website.</p>
    </div>
  );
};

const Projects: NextPage = () => {
  return (
    <Layout title='Projects'>
      <div className={styles.container}>
        <Header />

        <ProjectType
          projects={projects.openSource}
          description={`Work I have done on these open source projects range from small CSS fixes to critical redux store bug fix.`}
          title='Open Source Contributions'
        />

        <ProjectType
          projects={projects.personal}
          description={`These are projects I built on an idea I had. World Through Postcards, for example, came out of my hobby of
          collecting postcards from all over the world and I was looking for a better way to share my collection with
          the world. It was also my first app built with React then rebuilt with Next.`}
          title='Personal'
        />

        <ProjectType
          projects={projects.education}
          description={`Projects built as part of various schools such as Udacity, freeCodeCamp, The Odin Project & 42 Silicon Valley.
          Most of these projects went above and beyond the basic requirements for completion.`}
          title='Education'
        />
      </div>
    </Layout>
  );
};

export default Projects;
