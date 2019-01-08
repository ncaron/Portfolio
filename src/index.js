import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import 'reset-css';
import './styles.scss';

const consoleStyles1 = [
  'background: linear-gradient(green, blue)',
  'color: white',
  'font-weight: bold',
  'font-size: 18px'
].join(';');

const consoleStyles2 = [
  'background: linear-gradient(red, orange)',
  'color: white',
  'font-weight: bold',
  'font-size: 18px'
].join(';');

// console.log('%c Hey, I\'m Niko. A frontend developer looking for opportunities, excited to relocate!', consoleStyles1); // eslint-disable-line no-console
// console.log(''); // eslint-disable-line no-console
// console.log('%c Contact me at niko.caron90@gmail.com and please mention you came acros this message.', consoleStyles2); // eslint-disable-line no-console

ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById('root')
);
