import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Sidebar from '../sidebar';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const DESCRIPTION = 'Welcome to my portfolio!';

const Layout: NextPage<LayoutProps> = ({ children, title }: LayoutProps) => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.noScroll]: title === 'home' || open,
      })}
    >
      <Head>
        <title>{title} | Niko</title>
        <meta name='description' content={DESCRIPTION} key='description' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <div
        className={cn(styles.overlay, {
          [styles.open]: open,
        })}
      />
      <Sidebar onClick={handleOnClick} open={open} />

      {children}
    </div>
  );
};

export default Layout;
