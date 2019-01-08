import React from 'react';
import Employment from './Employment';
import employmentsData from './employmentsData';

const generateEmployments = employments => employments.map(employment => <Employment key={ employment.name } employment={ employment } />);

const Employments = () => {
  return (
    <div className="projects-container">
      <header>
        <h1>Employment History</h1>
        <p>Click on the company logo to be taken to the website.</p>
      </header>

      <div className="projects">
        {generateEmployments(employmentsData)}
      </div>
    </div>
  );
};

export default Employments;
