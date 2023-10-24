import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Fallback from './components/Fallback';
import Head from './components/Head';
import Layout from './components/Layout';
import aboutMetaData from './pages/About/aboutMetaData';
import articlesMetaData from './pages/Articles/articlesMetaData';
import bookingMetaData from './pages/Booking/bookingMetaData';
import certificateMetaData from './pages/Certificate/certificateMetaData';
import certificatesMetaData from './pages/Certificates/certificatesMetaData';
import faqMetaData from './pages/Faq/faqMetaData';
import focusingOnHealthMetaData from './pages/FocusingOnHealth/focusingOnHealthMetaData';
import helpMetaData from './pages/Help/helpMetaData';
import howToBookMetaData from './pages/HowToBook/howToBookMetaData';
import mainMetaData from './pages/Main/mainMetaData';
import notFoundMetaData from './pages/NotFound/notFoundMetaData';
import pricingMetaData from './pages/Pricing/pricingMetaData';
import referencesMetaData from './pages/References/referencesMetaData';

const Articles = React.lazy(function lazyLoadArticles() {
  return import('./pages/Articles');
});

const About = React.lazy(function lazyLoadAbout() {
  return import('./pages/About');
});

const Booking = React.lazy(function lazyLoadBooking() {
  return import('./pages/Booking');
});

const Certificate = React.lazy(function lazyLoadCertificate() {
  return import('./pages/Certificate');
});

const Certificates = React.lazy(function lazyLoadCertificates() {
  return import('./pages/Certificates');
});

const Faq = React.lazy(function lazyLoadFaq() {
  return import('./pages/Faq');
});

const FocusingOnHealth = React.lazy(function lazyLoadFocusingOnHealth() {
  return import('./pages/FocusingOnHealth');
});

const HowToBook = React.lazy(function lazyLoadHowToBook() {
  return import('./pages/HowToBook');
});

const Help = React.lazy(function lazyLoadHelp() {
  return import('./pages/Help');
});

const NotFound = React.lazy(function lazyLoadNotFound() {
  return import('./pages/NotFound');
});

const Main = React.lazy(function lazyLoadMain() {
  return import('./pages/Main');
});

const Pricing = React.lazy(function lazyLoadPricing() {
  return import('./pages/Pricing');
});

const References = React.lazy(function lazyLoadReferences() {
  return import('./pages/References');
});

// Uncomment if for testing the Fallback component
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
            {/* All pages listed here must also be presented in sitemap.xml */}
            <Route path={aboutMetaData.path} element={<About />} />
            <Route path={articlesMetaData.path} element={<Articles />} />
            <Route path={focusingOnHealthMetaData.path} element={<FocusingOnHealth />} />
            <Route path={bookingMetaData.path} element={<Booking />} />
            <Route path={certificatesMetaData.path} element={<Certificates />}>
              <Route path={certificateMetaData.path} element={<Certificate />} />
            </Route>
            <Route path={faqMetaData.path} element={<Faq />} />
            <Route path={helpMetaData.path} element={<Help />} />
            <Route path={howToBookMetaData.path} element={<HowToBook />} />
            <Route path={referencesMetaData.path} element={<References />} />
            <Route path={pricingMetaData.path} element={<Pricing />} />
            <Route path={mainMetaData.path} element={<Main />} />
            <Route path={notFoundMetaData.path} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;