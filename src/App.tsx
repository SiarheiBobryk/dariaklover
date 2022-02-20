import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Theme, useTheme } from '@mui/material/styles';

import Layout from './components/Layout';
import { Main, About, Archive } from './pages';
import { AppConfigContext, Config } from './providers/AppConfigProvider';

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
        <Routes>
          {/* TODO: Use lazy modules here */}
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
