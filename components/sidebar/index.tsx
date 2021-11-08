import type { NextPage } from 'next';
import styles from './styles.module.scss';
import cn from 'classnames';
import Navigation from '../navigation';
import Footer from '../footer';

interface SidebarProps {
  onClick: () => void;
  open: boolean;
}

const Sidebar: NextPage<SidebarProps> = (props: SidebarProps) => {
  return (
    <div>
      <div
        className={cn(styles.hamburger, {
          [styles.open]: props.open,
        })}
        onClick={props.onClick}
      >
        <span />
        <span />
        <span />
      </div>

      <div
        className={cn(styles.sidebar, {
          [styles.open]: props.open,
        })}
      >
        <Navigation />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
