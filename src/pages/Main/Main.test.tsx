import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { typographyClasses } from '@mui/material/Typography';

import Main from './Main';
import mainMetaData from './mainMetaData';

expect.extend(toHaveNoViolations);

describe('<Main />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Main />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const main: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<Main />).toJSON();
      expect(main).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right title HTML element', () => {
      render(<Main />);

      const { title }: HelmetPropsToState = Helmet.peek();
      expect(title).toBe(mainMetaData.title);
    });

    it('should have the `h2` HTML element as heading', () => {
      render(<Main />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toBeInTheDocument();
    });

    it('should have the CSS classes from `h5` Typography variant by default', () => {
      render(<Main />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toHaveClass(typographyClasses.h5);
    });

    it('should have a link with the right attributes', () => {
      render(<Main />);

      const link: HTMLAnchorElement | null = document.querySelector('p > a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent('Университете образовательной медицины (УОМ)');
      expect(link).toHaveAttribute('href', 'https://uom.education/university');
      expect(link).toHaveAttribute('rel', 'noopener');
    });

    it('should have the open-in-new-window icon with the right styling`', () => {
      render(<Main />);

      const icon: SVGElement | null = document.querySelector('a[href="https://uom.education/university"] > svg');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveStyle({ verticalAlign: 'middle' });
    });

    it('should have an italic (the `i` HTML element) school name', () => {
      render(<Main />);

      const i: HTMLElement | null = document.querySelector('i');
      expect(i).toHaveTextContent('PreventAge LifeStyle School');
    });

    it('should have the right `strong` element', () => {
      render(<Main />);

      const strong: HTMLElement | null = document.querySelector('strong');
      expect(strong).toHaveTextContent('что, как и почему нужно делать');
    });
  });
});
