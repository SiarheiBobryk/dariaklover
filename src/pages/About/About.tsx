import * as React from 'react';
import { Helmet } from 'react-helmet';

import AboutPost from '../../posts/About';
import aboutMetaData from './aboutMetaData';

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
