import * as React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import About, { aboutConstants } from './About';
// import AppConfigProvider, { Config, AppConfigContext } from '../../providers/AppConfigProvider';

describe('<About />', () => {
  describe('snapshotting', () => {
    it('renders correctly', () => {
      const about = renderer.create(<About />).toJSON();
      expect(about).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right constants', () => {
      render(<About />);
      expect(document.querySelector('h2')).toHaveTextContent(aboutConstants.title);
      expect(document.querySelector('i')).toHaveTextContent(aboutConstants.spell);
    });

    // TODO: Fix the test case below
    // it('should have the right `a` element with the right attributes', () => {
    //   let context: Config;

    //   render(
    //     <About>
    //       <AppConfigContext.Consumer>
    //         {function (value) {
    //           context = value;
    //         }}
    //       </AppConfigContext.Consumer>
    //       ,
    //     </About>,
    //   );
    //   const a = document.querySelector('a');

    //   expect(a).toHaveTextContent(context?.instagram?.id ?? {});
    //   expect(a).toHaveAttribute('href', instagramHref);
    //   expect(a).toHaveAttribute('target', '_blank');
    // });

    // TODO: find our how to check the space char between the link here and for other component 🤔
  });
});
