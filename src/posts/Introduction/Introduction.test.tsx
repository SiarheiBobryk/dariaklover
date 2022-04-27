import * as React from 'react';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { typographyClasses } from '@mui/material/Typography';

import Introduction from './Introduction';

expect.extend(toHaveNoViolations);

describe('<Introduction />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container } = render(<Introduction />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const introduction = renderer.create(<Introduction />).toJSON();
      expect(introduction).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the `h2` HTML element as heading', () => {
      render(<Introduction />);
      expect(document.querySelector('h2')).toBeInTheDocument();
    });

    it('should have the CSS classes from `h5` Typography variant by default', () => {
      render(<Introduction />);
      expect(document.querySelector('h2')).toHaveClass(typographyClasses.h5);
    });

    it('should have a link with the right attributes', () => {
      render(<Introduction />);
      const link = document.querySelector('p > a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('Университете образовательной медицины (УОМ)');
      expect(link).toHaveAttribute('href', 'https://uom.education/university');
      expect(link).toHaveAttribute('rel', 'noopener');
    });

    it('should have the open-in-new-window icon`', () => {
      render(<Introduction />);
      const icon = document.querySelector('a[href="https://uom.education/university"] > svg');
      expect(icon).toBeInTheDocument();
    });

    it('should have an italic (the `i` HTML element) school name', () => {
      render(<Introduction />);
      const italic = document.querySelector('i');
      expect(italic).toHaveTextContent('PreventAge LifeStyle School');
    });

    it('should have the right `strong` element', () => {
      render(<Introduction />);
      const strong = document.querySelector('strong');
      expect(strong).toHaveTextContent('что, как и почему нужно делать');
    });
  });
});
