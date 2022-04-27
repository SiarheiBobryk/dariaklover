import * as React from 'react';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { typographyClasses } from '@mui/material/Typography';

import About, { aboutConstants } from './About';
import { config } from '../../providers/AppConfigProvider';

expect.extend(toHaveNoViolations);

describe('<About />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container } = render(<About />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const about = renderer.create(<About />).toJSON();
      expect(about).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the `h2` HTML element as heading', () => {
      render(<About />);
      expect(document.querySelector('h2')).toBeInTheDocument();
    });

    it('should have the CSS classes from `h5` Typography variant by default', () => {
      render(<About />);
      expect(document.querySelector('h2')).toHaveClass(typographyClasses.h5);
    });

    it('should have the right constants', () => {
      render(<About />);
      expect(document.querySelector('h2')).toHaveTextContent(aboutConstants.title);
      expect(document.querySelector('i')).toHaveTextContent(aboutConstants.spell);
    });

    it('should have the right `a` element with the right attributes', () => {
      render(<About />);
      const a = document.querySelector('a');
      expect(a).toHaveTextContent(config.instagram.id);
      expect(a).toHaveAttribute('href', config.instagram.href);
      expect(a).toHaveAttribute('target', '_blank');
    });

    // TODO: find out how to check the space char between the link here and for other component 🤔
  });
});
