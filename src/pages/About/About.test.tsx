import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';

import { typographyClasses } from '@mui/material/Typography';

import About from './About';
import aboutMetaData from './aboutMetaData';

expect.extend(toHaveNoViolations);

describe('<About />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<About />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right title HTML element', () => {
      render(<About />);

      const { title }: HelmetPropsToState = Helmet.peek();
      expect(title).toBe(aboutMetaData.title);
    });

    it('should have the `h2` HTML element as heading', () => {
      render(<About />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toBeInTheDocument();
    });

    it('should have the CSS classes from `h5` Typography variant by default', () => {
      render(<About />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toHaveClass(typographyClasses.h5);
    });

    it('should have the right constants', () => {
      render(<About />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toHaveTextContent(aboutMetaData.heading);
    });
    // TODO: find out how to check the space char between the link here and for other component 🤔
  });
});
