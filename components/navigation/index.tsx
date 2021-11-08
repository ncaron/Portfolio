import cn from 'classnames';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const StyledLink = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(styles.link, {
          [styles.active]: isActive,
        })}
      >
        {text}
      </a>
    </Link>
  );
};

const Navigation: NextPage = () => {
  return (
    <nav>
      <StyledLink href={'/'} text={'Home'} />
      <StyledLink href={'/employment'} text={'Employment'} />
      <StyledLink href={'/projects'} text={'Projects'} />
      <StyledLink href={'/about'} text={'About'} />
    </nav>
  );
};

export default Navigation;
