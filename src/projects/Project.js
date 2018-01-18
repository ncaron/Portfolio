import React from 'react';
import PropTypes from 'prop-types';

const getIcons = icons => icons.map(icon => <i key={ icon } className={ icon } />);

const Project = ({project}) => {
  const image = require(`./images/${project.image}`);

  return (
    <div className="project">
      <a href={ project.links.live || project.links.code } target="_blank">
        <h3>
          {project.name}
          <div className="project-icons">{getIcons(project.icons)}</div>
        </h3>
        <img src={ image } alt={ project.name } />
      </a>
      <a className="info-btn" href={ project.links.code } target="_blank">Code & Info</a>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
