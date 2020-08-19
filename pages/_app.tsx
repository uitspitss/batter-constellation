import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/dist/base.min.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
