import * as React from 'react';
import { Helmet } from 'react-helmet';

import AboutPost from '../../posts/About';

export interface AboutMetaData {
  title: string;
  heading: string;
  path: string;
}

export const aboutMetaData: AboutMetaData = {
  title: 'Обо мне',
  heading: 'Обо мне',
  path: '/about',
};

// TODO: It would be great to add a pic here
function About() {
  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <AboutPost heading={aboutMetaData.heading} />
    </>
  );
}

export default About;
