import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { positions } from '../../lib/icons';
import styles from './styles.module.scss';
import Image from 'next/image';
import cn from 'classnames';

interface IconProps {
  icon: string;
}

const Icon = ({ icon }: IconProps) => {
  const [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    let initialPosition = {};
    let position = {};

    initialPosition = {
      ...positions[icon],
      left: `-${positions[icon].left}`,
      right: `-${positions[icon].right}`,
    };
    position = positions[icon];

    setCurrentPosition(initialPosition);

    setTimeout(() => {
      requestAnimationFrame(() => {
        setCurrentPosition(position);
      });
    });
  }, [icon]);

  return (
    <div
      id={icon}
      className={cn(styles.container, icon)}
      style={currentPosition}
    >
      <Image src={`/${icon}.svg`} width='100' height='100' alt={icon} />
    </div>
  );
};

const IconContainer: NextPage = () => {
  return (
    <div>
      {Object.keys(positions).map((position) => {
        return <Icon key={position} icon={position} />;
      })}
    </div>
  );
};

export default IconContainer;
