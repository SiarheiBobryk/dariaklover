import * as React from 'react';
import { Helmet } from 'react-helmet';

import AboutPost from '../../posts/About';

// TODO: It would be great to add a pic here
function About() {
  const title = 'Обо мне';

  return (
    <>
      {/* TODO: Move it to a separate component */}
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <AboutPost />
    </>
  );
}

export default About;
