import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const style = {
  fill: '#cb3837'
};

const position = {
  initialOver800: {
    top: '70%',
    left: '-11%'
  },
  initialUnder800: {
    top: '80%',
    left: '-11%'
  },
  initialUnder500: {
    top: '80%',
    left: '-11%'
  },
  over800: {
    top: '70%',
    left: '11%'
  },
  under800: {
    top: '80%',
    left: '11%'
  },
  under500: {
    top: '80%',
    left: '11%'
  }
};

class IconNPM extends Component {
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
      <svg className="icon npm" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path style={ style } d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"/>
      </svg>
    );
  }
}

IconNPM.propTypes = {
  location: PropTypes.string
};

export default IconNPM;
