import React from 'react';
import PropTypes from 'prop-types';

const Employment = ({employment}) => {
const image = require(`./images/${employment.image}`);
const date = `${employment.dates.from} - ${employment.dates.to}`;

  return (
    <div className="employment">
      <a href={ employment.link } target="_blank">
        <h3>{employment.company}</h3>
        <div className="brief">
          <h4>{employment.position}</h4>
          <p>{date}</p>
        </div>
        <img src={ image } alt={ employment.company } />
      </a>

      <p className="employment-info">{employment.description}</p>
    </div>
  );
};

Employment.propTypes = {
  employment: PropTypes.object.isRequired
};

export default Employment;
