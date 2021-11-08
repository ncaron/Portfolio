import type { AppProps } from 'next/app';
import 'reset-css';
import '../styles/global.scss';
import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
