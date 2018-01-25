import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Analytics from './Analytics';
import HomePage from './HomePage';
import Projects from './projects/Projects';
import About from './about/About';

const Routes = () => {
  return (
    <div>
      <Route component={ Analytics } />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/projects" component={ Projects } />
        <Route path="/about" component={ About } />
      </Switch>
    </div>
  );
};

export default Routes;
