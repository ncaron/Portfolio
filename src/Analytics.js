import ReactGA from 'react-ga';

ReactGA.initialize('UA-106127649-2');

const Analytics = () => {
  const path = window.location.hash;

  ReactGA.set({ page: path });
  ReactGA.pageview(path);
  return null;
};

export default Analytics;
