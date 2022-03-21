import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Theme, useTheme } from '@mui/material/styles';

import Layout from './components/Layout';
import Fallback from './components/Fallback';

import { AppConfigContext, Config } from './providers/AppConfigProvider';

const About = React.lazy(function lazyLoadAbout() {
  return import('./pages/About');
});

const Archive = React.lazy(function lazyLoadArchive() {
  return import('./pages/Archive');
});

const Main = React.lazy(function lazyLoadMain() {
  return import('./pages/Main');
});

// TODO: Remove it after testing
// const Main = React.lazy(() => {
//   return import('./pages/Main').then((module) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//         resolve(module as any);
//       }, 2000);
//     });
//   });
// });

interface SuspenseProps {
  children: React.ReactNode;
}

function Suspense(props: SuspenseProps) {
  const { children } = props;
  return <React.Suspense fallback={<Fallback />}>{children}</React.Suspense>;
}

function App() {
  const theme: Theme = useTheme();
  const { pageNameBase, language, description, keywords }: Config = React.useContext(AppConfigContext);

  return (
    <>
      <Helmet titleTemplate={`%s | ${pageNameBase}`}>
        <html lang={language} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content={theme.palette.background.default} />
      </Helmet>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
