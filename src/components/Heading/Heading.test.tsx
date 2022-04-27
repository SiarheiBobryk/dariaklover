import * as React from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { typographyClasses } from '@mui/material/Typography';

import Heading from './Heading';

expect.extend(toHaveNoViolations);

describe('<Heading />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container } = render(<Heading>Lorem Ipsulum</Heading>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly without a content', () => {
      const heading = renderer.create(<Heading />).toJSON();
      expect(heading).toMatchSnapshot();
    });
    it('should render correctly with a content', () => {
      const heading = renderer.create(<Heading>Lorem Ipsulum</Heading>).toJSON();
      expect(heading).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should be the `h2` HTML element by default', () => {
      render(<Heading>Дарья Кловер</Heading>);
      expect(document.querySelector('h2')).toBeInTheDocument();
    });

    it('should be the `h1` HTML element', () => {
      render(<Heading component="h1">Дарья Кловер</Heading>);
      expect(document.querySelector('h1')).toBeInTheDocument();
    });

    it('should have the CSS classes from `h5` Typography variant by default', () => {
      render(<Heading>Дарья Кловер</Heading>);
      expect(screen.getByText('Дарья Кловер')).toHaveClass(typographyClasses.h5);
    });

    it('should have the CSS classes from `h3` Typography variant', () => {
      render(<Heading variant="h3">Дарья Кловер</Heading>);
      expect(screen.getByText('Дарья Кловер')).toHaveClass(typographyClasses.h3);
    });
  });
});
