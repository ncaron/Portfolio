import React from 'react';
import Project from './Project';
import projectsData from './projectsData';

const generateProjects = projects => projects.map(project => <Project key={ project.name } project={ project } />);

const Projects = () => {
  return (
    <div className="projects-container">
      <header>
        <h1>Projects</h1>
        <p>Click on any image to be taken to the live website.</p>
      </header>

      <div className="projects">
        <h2>Open Source Contributions</h2>
        <p>
          Work I have done on these open source projects range from small CSS fixes to critical redux store bug fix.
          Currently, I am leading the charge to change the old challenges of freeCodeCamp's curriculum to use ES6 syntax.
        </p>
        {generateProjects(projectsData.openSource)}

        <h2>Personal</h2>
        <p>
          These are projects I built on an idea I had. World Through Postcards, for example, came out of my hobby of
          collecting postcards from all over the world and I was looking for a better way to share my collection with
          the world. It was also my first app built with React.
        </p>
        {generateProjects(projectsData.personal)}

        <h2>Education</h2>
        <p>
          Projects built as part of various schools such as Udacity, freeCodeCamp, The Odin Project & 42 Silicon Valley.
          Most of these projects went above and beyond the basic requirements for completion.</p>
        {generateProjects(projectsData.education)}
      </div>
    </div>
  );
};

export default Projects;
