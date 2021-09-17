import { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress";


import '../styles/globals.css';
import NavBar from '../components/NavBar';

const progress = new ProgressBar({
  size: 6,
  color: "#6366F1",
  className: 'z-50',
  delay: 10,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>The Nest Housing Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
