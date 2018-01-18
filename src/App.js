import React from 'react';
import Routes from './Routes';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div>
      <span className="overlay" onClick={ () => document.getElementById('hamburger').click() } />
      <Sidebar />
      <Routes />
    </div>
  );
};

export default App;
