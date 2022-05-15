import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Fallback from './components/Fallback';
import Head from './components/Head';
import { mainMetaData } from './pages/Main';
import { aboutMetaData } from './pages/About';
import { referencesMetaData } from './pages/References';

const About = React.lazy(function lazyLoadAbout() {
  return import('./pages/About');
});

const Archive = React.lazy(function lazyLoadArchive() {
  return import('./pages/Archive');
});

const References = React.lazy(function lazyLoadReferences() {
  return import('./pages/References');
});

const Main = React.lazy(function lazyLoadMain() {
  return import('./pages/Main');
});

// TODO: Uncomment if for testing the Fallback component
// const Main = React.lazy(() => {
//   return import('./pages/Main').then((module) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//         resolve(module as any);
//       }, 2000000);
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
  return (
    <>
      <Head />
      <Layout>
        <Suspense>
          <Routes>
            <Route path={aboutMetaData.path} element={<About />} />
            <Route path="/archive" element={<Archive />} />
            <Route path={referencesMetaData.path} element={<References />} />
            <Route path={mainMetaData.path} element={<Main />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
