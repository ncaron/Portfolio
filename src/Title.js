import React from 'react';
import { NavLink } from 'react-router-dom';

const Title = () => {
  return (
    <div className="title">
      <p className="current">Front End Web Developer</p>
      <p className="future">Future Full Stack Web Developer</p>
      <NavLink className="status" to="/about">&rarr; Not currently available for hire &larr;</NavLink>
    </div>
  );
};

export default Title;
