import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const outer = {
  fill: '#8ed6fb'
};

const inner = {
  fill: '#1c78c0'
};

const position = {
  initialOver800: {
    top: '45%',
    right: '-12%'
  },
  initialUnder800: {
    top: '55%',
    right: '-20%'
  },
  initialUnder500: {
    top: '65%',
    right: '-10%'
  },
  over800: {
    top: '45%',
    right: '12%'
  },
  under800: {
    top: '55%',
    right: '20%'
  },
  under500: {
    top: '65%',
    right: '10%'
  }
};

class IconWebpack extends Component {
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
      <svg className="icon webpack" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <g id="original">
          <path style={ outer } d="M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"/>
          <path style={ inner } d="M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"/>
        </g>
      </svg>
    );
  }
}

IconWebpack.propTypes = {
  location: PropTypes.string
};

export default IconWebpack;
