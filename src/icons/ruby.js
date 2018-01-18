import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const position = {
  initialOver800: {
    top: '51%',
    right: '-24%'
  },
  initialUnder800: {
    top: '60%',
    right: '-42%'
  },
  initialUnder500: {
    top: '60%',
    right: '-42%'
  },
  over800: {
    top: '51%',
    right: '24%'
  },
  under800: {
    top: '60%',
    right: '42%'
  },
  under500: {
    top: '60%',
    right: '42%'
  }
};

class IconRuby extends Component {
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
      <svg className="icon ruby" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <linearGradient id="ruby-a" gradientUnits="userSpaceOnUse" x1="157.08" y1="2382.05" x2="131.682" y2="2426.892" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#fb7655"/>
          <stop offset="0" stopColor="#fb7655"/>
          <stop offset=".41" stopColor="#e42b1e"/>
          <stop offset=".99" stopColor="#900"/>
          <stop offset="1" stopColor="#900"/>
        </linearGradient>
        <path fill="url(#ruby-a)" d="M97.078 83.214l-68.738 40.817 89.003-6.04 6.855-89.745z"/>
        <linearGradient id="ruby-b" gradientUnits="userSpaceOnUse" x1="169.731" y1="2419.72" x2="136.998" y2="2441.685" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#871101"/>
          <stop offset="0" stopColor="#871101"/>
          <stop offset=".99" stopColor="#911209"/>
          <stop offset="1" stopColor="#911209"/>
        </linearGradient>
        <path fill="url(#ruby-b)" d="M117.488 117.93l-7.649-52.799-20.837 27.514z"/>
        <linearGradient id="ruby-c" gradientUnits="userSpaceOnUse" x1="143.542" y1="2380.69" x2="110.81" y2="2402.655" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#871101"/>
          <stop offset="0" stopColor="#871101"/>
          <stop offset=".99" stopColor="#911209"/>
          <stop offset="1" stopColor="#911209"/>
        </linearGradient>
        <path fill="url(#ruby-c)" d="M117.592 117.93l-56.044-4.399-32.91 10.385z"/>
        <linearGradient id="ruby-d" gradientUnits="userSpaceOnUse" x1="74.817" y1="2435.622" x2="79.891" y2="2402.644" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0" stopColor="#fff"/>
          <stop offset=".23" stopColor="#e57252"/>
          <stop offset=".46" stopColor="#de3b20"/>
          <stop offset=".99" stopColor="#a60003"/>
          <stop offset="1" stopColor="#a60003"/>
        </linearGradient>
        <path fill="url(#ruby-d)" d="M28.717 123.928l14.001-45.867-30.81 6.588z"/>
        <linearGradient id="ruby-e" gradientUnits="userSpaceOnUse" x1="109.719" y1="2466.413" x2="111.589" y2="2432.757" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0" stopColor="#fff"/>
          <stop offset=".23" stopColor="#e4714e"/>
          <stop offset=".56" stopColor="#be1a0d"/>
          <stop offset=".99" stopColor="#a80d00"/>
          <stop offset="1" stopColor="#a80d00"/>
        </linearGradient>
        <path fill="url(#ruby-e)" d="M88.996 92.797l-12.882-50.46-36.866 34.558z"/>
        <linearGradient id="ruby-f" gradientUnits="userSpaceOnUse" x1="140.691" y1="2497.523" x2="146.289" y2="2473.401" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0" stopColor="#fff"/>
          <stop offset=".18" stopColor="#e46342"/>
          <stop offset=".4" stopColor="#c82410"/>
          <stop offset=".99" stopColor="#a80d00"/>
          <stop offset="1" stopColor="#a80d00"/>
        </linearGradient>
        <path fill="url(#ruby-f)" d="M121.275 43.047l-34.849-28.462-9.704 31.373z"/>
        <linearGradient id="ruby-g" gradientUnits="userSpaceOnUse" x1="123.6" y1="2506.018" x2="147.719" y2="2518.077" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0" stopColor="#fff"/>
          <stop offset=".54" stopColor="#c81f11"/>
          <stop offset=".99" stopColor="#bf0905"/>
          <stop offset="1" stopColor="#bf0905"/>
        </linearGradient>
        <path fill="url(#ruby-g)" d="M104.978 4.437l-20.497 11.327-12.93-11.479z"/>
        <linearGradient id="ruby-h" gradientUnits="userSpaceOnUse" x1="53.674" y1="2444.028" x2="55.66" y2="2424.153" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#fff"/>
          <stop offset="0" stopColor="#fff"/>
          <stop offset=".31" stopColor="#de4024"/>
          <stop offset=".99" stopColor="#bf190b"/>
          <stop offset="1" stopColor="#bf190b"/>
        </linearGradient>
        <path fill="url(#ruby-h)" d="M3.802 100.034l8.586-15.659-6.946-18.655z"/>
        <path fill="#fff" d="M4.981 65.131l6.987 19.821 30.365-6.812 34.667-32.218 9.783-31.075-15.403-10.878-26.19 9.802c-8.252 7.675-24.263 22.86-24.84 23.146-.573.291-10.575 19.195-15.369 28.214z"/>
        <linearGradient id="ruby-i" gradientUnits="userSpaceOnUse" x1="40.026" y1="2418.781" x2="133.345" y2="2514.739" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#bd0012"/>
          <stop offset="0" stopColor="#bd0012"/>
          <stop offset=".07" stopColor="#fff"/>
          <stop offset=".17" stopColor="#fff"/>
          <stop offset=".27" stopColor="#c82F1c"/>
          <stop offset=".33" stopColor="#820c01"/>
          <stop offset=".46" stopColor="#a31601"/>
          <stop offset=".72" stopColor="#b31301"/>
          <stop offset=".99" stopColor="#e82609"/>
          <stop offset="1" stopColor="#e82609"/>
        </linearGradient>
        <path fill="url(#ruby-i)" d="M29.519 29.521c17.882-17.73 40.937-28.207 49.785-19.28 8.843 8.926-.534 30.62-18.418 48.345-17.884 17.725-40.653 28.779-49.493 19.852-8.849-8.92.242-31.191 18.126-48.917z"/>
        <linearGradient id="ruby-j" gradientUnits="userSpaceOnUse" x1="111.507" y1="2409.102" x2="83.398" y2="2416.039" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#8c0c01"/>
          <stop offset="0" stopColor="#8c0c01"/>
          <stop offset=".54" stopColor="#990c00"/>
          <stop offset=".99" stopColor="#a80d0e"/>
          <stop offset="1" stopColor="#a80d0e"/>
        </linearGradient>
        <path fill="url(#ruby-j)" d="M28.717 123.909l13.89-46.012 46.135 14.82c-16.68 15.642-35.233 28.865-60.025 31.192z"/>
        <linearGradient id="ruby-k" gradientUnits="userSpaceOnUse" x1="159.785" y1="2442.837" x2="134.814" y2="2465.217" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#7e110b"/>
          <stop offset="0" stopColor="#7e110b"/>
          <stop offset=".99" stopColor="#9e0c00"/>
          <stop offset="1" stopColor="#9e0c00"/>
        </linearGradient>
        <path fill="url(#ruby-k)" d="M77.062 45.831l11.844 46.911c13.934-14.65 26.439-30.401 32.563-49.883l-44.407 2.972z"/>
        <linearGradient id="ruby-l" gradientUnits="userSpaceOnUse" x1="168.959" y1="2483.901" x2="156.521" y2="2497.199" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#79130d"/>
          <stop offset="0" stopColor="#79130d"/>
          <stop offset=".99" stopColor="#9e120b"/>
          <stop offset="1" stopColor="#9e120b"/>
        </linearGradient>
        <path fill="url(#ruby-l)" d="M121.348 43.097c4.74-14.305 5.833-34.825-16.517-38.635l-18.339 10.13 34.856 28.505z"/>
        <path fill="#9e1209" d="M3.802 99.828c.656 23.608 17.689 23.959 24.945 24.167l-16.759-39.14-8.186 14.973z"/>
        <radialGradient id="ruby-m" cx="138.703" cy="2464.789" r="30.601" gradientTransform="matrix(1 0 0 -1 -47.5 2517)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a80d00"/>
          <stop offset="0" stopColor="#a80d00"/>
          <stop offset=".99" stopColor="#7e0e08"/>
          <stop offset="1" stopColor="#7e0e08"/>
        </radialGradient>
        <path fill="url(#ruby-m)" d="M77.128 45.904c10.708 6.581 32.286 19.798 32.723 20.041.68.383 9.304-14.542 11.261-22.976l-43.984 2.935z"/>
        <radialGradient id="ruby-n" cx="96.325" cy="2424.465" r="40.679" gradientTransform="matrix(1 0 0 -1 -47.5 2517)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a30c00"/>
          <stop offset="0" stopColor="#a30c00"/>
          <stop offset=".99" stopColor="#800e08"/>
          <stop offset="1" stopColor="#800e08"/>
        </radialGradient>
        <path fill="url(#ruby-n)" d="M42.589 77.897l18.57 35.828c10.98-5.955 19.579-13.211 27.454-20.983l-46.024-14.845z"/>
        <linearGradient id="ruby-o" gradientUnits="userSpaceOnUse" x1="67.509" y1="2393.115" x2="57.373" y2="2427.506" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#8b2114"/>
          <stop offset="0" stopColor="#8b2114"/>
          <stop offset=".43" stopColor="#9e100a"/>
          <stop offset=".99" stopColor="#b3100c"/>
          <stop offset="1" stopColor="#b3100c"/>
        </linearGradient>
        <path fill="url(#ruby-o)" d="M11.914 84.904l-2.631 31.331c4.964 6.781 11.794 7.371 18.96 6.842-5.184-12.9-15.538-38.696-16.329-38.173z"/>
        <linearGradient id="ruby-p" gradientUnits="userSpaceOnUse" x1="145.272" y1="2507.076" x2="167.996" y2="2497.045" gradientTransform="matrix(1 0 0 -1 -47.5 2517)">
          <stop offset="0" stopColor="#b31000"/>
          <stop offset="0" stopColor="#b31000"/>
          <stop offset=".44" stopColor="#910f08"/>
          <stop offset=".99" stopColor="#791c12"/>
          <stop offset="1" stopColor="#791c12"/>
        </linearGradient>
        <path fill="url(#ruby-p)" d="M86.384 14.67l36.891 5.177c-1.969-8.343-8.015-13.727-18.32-15.41l-18.571 10.233z"/>
      </svg>
    );
  }
}

IconRuby.propTypes = {
  location: PropTypes.string
};

export default IconRuby;
