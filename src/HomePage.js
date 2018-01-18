import React from 'react';
import Background from './Background';
import Title from './Title';
import Name from './Name';
import Icons from './Icons';

const HomePage = () => {
  return (
    <div className="container">
      <Background />
      <Title />
      <Name />
      <Icons />
    </div>
  );
};

export default HomePage;
