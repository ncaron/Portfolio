import type { NextPage } from 'next';
import styles from './styles.module.scss';
import Link from 'next/link';
import cn from 'classnames';

const StyledLink = ({
  className,
  href,
  icon,
}: {
  className: string;
  href: string;
  icon: string;
}) => {
  return (
    <Link href={href}>
      <a target='_blank' className={cn(styles.link, className)}>
        <i className={`fab fa-${icon}`} />
      </a>
    </Link>
  );
};

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <StyledLink
          href='https://github.com/ncaron'
          className={styles.github}
          icon='github'
        />
        <StyledLink
          href='https://www.freecodecamp.org/ncaron'
          className={styles.freecodecamp}
          icon='free-code-camp'
        />
        <StyledLink
          href='https://codepen.io/ncaron/'
          className={styles.codepen}
          icon='codepen'
        />
      </section>

      <section className={styles.section}>
        <StyledLink
          href='https://www.linkedin.com/in/nikocaron/'
          className={styles.linkedin}
          icon='linkedin'
        />
        <StyledLink
          href='https://angel.co/niko-caron'
          className={styles.angel}
          icon='angellist'
        />
        <StyledLink
          href='https://twitter.com/niko_caron'
          className={styles.twitter}
          icon='twitter'
        />
        <StyledLink
          href='https://stackoverflow.com/users/7078401/niko-caron'
          className={styles.stackoverflow}
          icon='stack-overflow'
        />
        <StyledLink
          href='https://medium.com/@ncaron16/'
          className={styles.medium}
          icon='medium'
        />
        <StyledLink
          href='https://www.quora.com/profile/Niko-Caron'
          className={styles.quora}
          icon='quora'
        />
      </section>
    </footer>
  );
};

export default Footer;
