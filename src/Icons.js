import React from 'react';
import PropTypes from 'prop-types';
import IconAtom from './icons/atom';
import IconBabel from './icons/babel';
import IconC from './icons/c';
import IconChrome from './icons/chrome';
import IconCSS from './icons/css';
import IconGit from './icons/git';
import IconGitHub from './icons/github';
import IconGulp from './icons/gulp';
import IconHandlebars from './icons/handlebars';
import IconHeroku from './icons/heroku';
import IconHTML from './icons/html';
import IconJavascript from './icons/javascript';
import IconJquery from './icons/jquery';
import IconNPM from './icons/npm';
import IconPhotoshop from './icons/photoshop';
import IconRails from './icons/rails';
import IconReact from './icons/react';
import IconRedux from './icons/redux';
import IconRuby from './icons/ruby';
import IconSass from './icons/sass';
import IconWebpack from './icons/webpack';
import IconYarn from './icons/yarn';

const Icons = ({location}) => {
  return (
    <div className="icons">
      <IconAtom location={ location } />
      <IconBabel location={ location } />
      <IconC location={ location } />
      <IconChrome location={ location } />
      <IconCSS location={ location } />
      <IconGit location={ location } />
      <IconGitHub location={ location } />
      <IconGulp location={ location } />
      <IconHandlebars location={ location } />
      <IconHeroku location={ location } />
      <IconHTML location={ location } />
      <IconJavascript location={ location } />
      <IconJquery location={ location } />
      <IconNPM location={ location } />
      <IconPhotoshop location={ location } />
      <IconRails location={ location } />
      <IconReact location={ location } />
      <IconRedux location={ location } />
      <IconRuby location={ location } />
      <IconSass location={ location } />
      <IconWebpack location={ location } />
      <IconYarn location={ location } />
    </div>
  );
};

Icons.propTypes = {
  location: PropTypes.string
};

export default Icons;
