import { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress";
import Script from 'next/script';


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
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
      </Head>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaSF-UHuEUCqP4jHxQLpjPo1NuiGYK25I&libraries=places"></Script>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
