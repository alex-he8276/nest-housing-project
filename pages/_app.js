import { Fragment } from 'react';
import '../styles/globals.css';
import MainNavigation from '../components/layout/MainNavigation';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MainNavigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
