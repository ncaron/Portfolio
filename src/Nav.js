import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({triggerSidebar}) => {
  return (
    <nav>
      <NavLink activeClassName="active" exact to="/" onClick={ triggerSidebar }>Home</NavLink>
      <NavLink to="/projects" onClick={ triggerSidebar }>Projects</NavLink>
      <NavLink to="/about" onClick={ triggerSidebar }>About</NavLink>
    </nav>
  );
};

Nav.propTypes = {
  triggerSidebar: PropTypes.func.isRequired,
};

export default Nav;
