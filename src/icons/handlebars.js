import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const position = {
  initialOver800: {
    top: '54%',
    right: '-3%'
  },
  initialUnder800: {
    top: '70%',
    right: '-3%'
  },
  initialUnder500: {
    top: '80%',
    right: '-3%'
  },
  over800: {
    top: '54%',
    right: '3%'
  },
  under800: {
    top: '70%',
    right: '3%'
  },
  under500: {
    top: '80%',
    right: '3%'
  }
};

class IconHandlebars extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPosition: getQuery(position, true, this.props.location) };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.startSlideAnimation();
    this.setQueryLoop();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  startSlideAnimation() {
    requestAnimationFrame(() => {
      this.setState({ currentPosition: getQuery(position, false, this.props.location) });
    });
  }

  onResize() {
    this.setState({ currentPosition: getQuery(position, false, this.props.location) });
  }

  setQueryLoop() {
    window.addEventListener('resize', this.onResize);
  }

  render() {
    return (
      <svg className="icon handlebars" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <g>
          <path d="M14.59,62.67a7.14,7.14,0,0,0,2.31-3.48c.46-2,.36-3.94-2.31-5.3C7.82,50.47,3.45,56.57,2.77,58s-1.74,3.68-1,8.84,3.19,9.9,11,11.73A32.89,32.89,0,0,0,34.77,76c6.84-3.26,19.7-9,22.94-9.58a28.15,28.15,0,0,1,6.49-.81V57.76a18,18,0,0,0-17.38-9.15C34.43,49.59,29.51,56,26.49,58.7s-8.61,9.17-12.37,8S9.31,61,10.64,59.56s2.37-1.18,3.18,0A6.24,6.24,0,0,1,14.59,62.67Z"/>
          <path d="M113.41,62.67a7.14,7.14,0,0,1-2.31-3.48c-.46-2-.36-3.94,2.31-5.3,6.76-3.43,11.13,2.67,11.81,4.11s1.74,3.68,1,8.84-3.19,9.9-11,11.73A32.89,32.89,0,0,1,93.23,76c-6.84-3.26-19.7-9-22.94-9.58a28.15,28.15,0,0,0-6.49-.81V57.76a18,18,0,0,1,17.38-9.15c12.39,1,17.32,7.38,20.34,10.08s8.61,9.17,12.37,8,4.81-5.76,3.48-7.19-2.37-1.18-3.18,0A6.24,6.24,0,0,0,113.41,62.67Z"/>
        </g>
      </svg>
    );
  }
}

IconHandlebars.propTypes = {
  location: PropTypes.string
};

export default IconHandlebars;
