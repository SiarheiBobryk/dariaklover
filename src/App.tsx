import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Copyright from './components/Copyright';
import Layout from './components/Layout';

import { Main, About, Archive } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Copyright />
    </Layout>
  );
}

export default App;
