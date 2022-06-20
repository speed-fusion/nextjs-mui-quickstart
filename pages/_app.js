import React from 'react';
import { CacheProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import createEmotionCache from '../src/createEmotionCache';
// import Layout from '../components/layout';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
 const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

 return (
   <CacheProvider value={emotionCache}>
     {/* <ThemeProvider theme={theme}>
       <CssBaseline /> */}
       {/* <Layout> */}
       <Component {...pageProps} />
       {/* </Layout> */}
     {/* </ThemeProvider> */}
   </CacheProvider>
 );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
 };