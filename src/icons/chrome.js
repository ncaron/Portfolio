import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const position = {
  initialOver800: {
    top: '55%',
    left: '-2%'
  },
  initialUnder800: {
    top: '70%',
    left: '-15%'
  },
  initialUnder500: {
    top: '70%',
    left: '-15%'
  },
  over800: {
    top: '55%',
    left: '2%'
  },
  under800: {
    top: '70%',
    left: '15%'
  },
  under500: {
    top: '70%',
    left: '15%'
  }
};

class IconChrome extends Component {
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

  render () {
    return (
      <svg className="icon chrome" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <circle fill="#fff" cx="64.149" cy="64.236" r="60.999"/>
        <path fillOpacity=".1" d="M102.966 75.327c0-21.439-17.379-38.819-38.817-38.819s-38.818 17.38-38.818 38.819h11.09c0-15.314 12.415-27.727 27.727-27.727 15.313 0 27.727 12.413 27.727 27.727"/>
        <circle fillOpacity=".1" cx="66.922" cy="71.999" r="21.072"/>
        <linearGradient id="chrome-a" gradientUnits="userSpaceOnUse" x1="395.191" y1="484.168" x2="395.191" y2="484.723" gradientTransform="matrix(82 0 0 82 -32341.5 -39660.313)">
          <stop offset="0" stopColor="#81b4e0"/>
          <stop offset="1" stopColor="#0c5a94"/>
        </linearGradient>
        <circle fill="url(#chrome-a)" cx="64.149" cy="64.235" r="22.736"/>
        <linearGradient id="chrome-b" gradientUnits="userSpaceOnUse" x1="-608.91" y1="-597.648" x2="-608.91" y2="-547.185" gradientTransform="translate(675 599.775)">
          <stop offset="0" stopColor="#f06b59"/>
          <stop offset="1" stopColor="#df2227"/>
        </linearGradient>
        <path fill="url(#chrome-b)" d="M119.602 36.508c-15.266-30.716-52.542-43.24-83.259-27.974-9.578 4.761-17.764 11.913-23.765 20.766l24.955 43.253c-4.597-14.606 3.521-30.174 18.127-34.77 2.567-.808 5.243-1.238 7.935-1.274"/>
        <linearGradient id="chrome-c" gradientUnits="userSpaceOnUse" x1="-657.835" y1="-491.393" x2="-632.327" y2="-533.537" gradientTransform="translate(675 599.775)">
          <stop offset="0" stopColor="#388b41"/>
          <stop offset="1" stopColor="#4cb749"/>
        </linearGradient>
        <path fill="url(#chrome-c)" d="M12.578 29.3c-19.1 28.492-11.486 67.071 17.005 86.171 8.814 5.909 18.997 9.461 29.575 10.319l26.063-44.363c-9.745 11.811-27.22 13.486-39.032 3.74-4.011-3.309-7.012-7.679-8.657-12.613"/>
        <linearGradient id="chrome-d" gradientUnits="userSpaceOnUse" x1="-572.385" y1="-486.91" x2="-599.557" y2="-552.345" gradientTransform="translate(675 599.775)">
          <stop offset="0" stopColor="#e4b022"/>
          <stop offset=".3" stopColor="#fcd209"/>
        </linearGradient>
        <path fill="url(#chrome-d)" d="M59.158 125.791c34.204 2.585 64.027-23.047 66.613-57.25.834-11.037-1.295-22.093-6.17-32.031h-56.006c15.312.07 27.67 12.541 27.598 27.854-.028 6.195-2.131 12.204-5.972 17.064"/>
        <linearGradient id="chrome-e" gradientUnits="userSpaceOnUse" x1="-649.391" y1="-528.885" x2="-649.391" y2="-573.247" gradientTransform="translate(675 599.775)">
          <stop offset="0" stopOpacity=".15"/>
          <stop offset=".3" stopOpacity=".06"/>
          <stop offset="1" stopOpacity=".03"/>
        </linearGradient>
        <path fill="url(#chrome-e)" d="M12.578 29.3l24.955 43.253c-1.849-6.221-1.457-12.893 1.107-18.854l-24.954-26.063"/>
        <linearGradient id="chrome-f" gradientUnits="userSpaceOnUse" x1="-588.158" y1="-514.559" x2="-618.657" y2="-483.505" gradientTransform="translate(675 599.775)">
          <stop offset="0" stopOpacity=".15"/>
          <stop offset=".3" stopOpacity=".06"/>
          <stop offset="1" stopOpacity=".03"/>
        </linearGradient>
        <path fill="url(#chrome-f)" d="M59.158 125.791l26.063-44.363c-4.112 4.904-9.794 8.233-16.082 9.426l-11.091 34.937"/>
        <linearGradient id="chrome-g" gradientUnits="userSpaceOnUse" x1="-588.6" y1="-505.621" x2="-584.163" y2="-549.431" gradientTransform="translate(675 599.775)">
          <stop offset="0" stopOpacity=".15"/>
          <stop offset=".3" stopOpacity=".06"/>
          <stop offset="1" stopOpacity=".03"/>
        </linearGradient>
        <path fill="url(#chrome-g)" d="M119.602 36.508h-56.007c8.436.039 16.396 3.918 21.626 10.537l35.491-8.873"/>
      </svg>
    );
  }
}

IconChrome.propTypes = {
  location: PropTypes.string
};

export default IconChrome;
