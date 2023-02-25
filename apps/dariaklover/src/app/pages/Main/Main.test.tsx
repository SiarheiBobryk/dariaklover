import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';

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

    it('should have the right `strong` element', () => {
      render(<Main />);

      const strong: HTMLElement | null = document.querySelector('strong');
      expect(strong).toHaveTextContent('что, как и почему нужно делать');
    });
  });
});
