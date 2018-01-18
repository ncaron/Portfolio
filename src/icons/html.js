import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../helpers/getQuery';

const position = {
  initialOver800: {
    top: '44%',
    left: '-4%'
  },
  initialUnder800: {
    top: '62%',
    left: '-7%'
  },
  initialUnder500: {
    top: '62%',
    left: '-7%'
  },
  over800: {
    top: '44%',
    left: '4%'
  },
  under800: {
    top: '62%',
    left: '7%'
  },
  under500: {
    top: '62%',
    left: '7%'
  }
};

class IconHTML extends Component {
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
      <svg className="icon html" style={ this.state.currentPosition } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path fill="#e44d26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"/>
        <path fill="#f16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"/>
        <path fill="#ebebeb" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"/>
        <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
      </svg>
    );
  }
}

IconHTML.propTypes = {
  location: PropTypes.string
};

export default IconHTML;
