import * as React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import About, { aboutConstants } from './About';

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

    it('should have the right `a` element with the right attributes', () => {
      render(<About />);
      const a = document.querySelector('a');

      expect(a).toHaveTextContent(aboutConstants.instagramLink.children);
      expect(a).toHaveAttribute('href', aboutConstants.instagramLink.props.href);
      expect(a).toHaveAttribute('target', aboutConstants.instagramLink.props.target);
    });

    // TODO: find our how to check the space char between the link here and for other component 🤔
  });
});
