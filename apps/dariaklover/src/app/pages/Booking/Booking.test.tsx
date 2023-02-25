import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';

import Booking from './Booking';
import bookingMetaData from './bookingMetaData';

expect.extend(toHaveNoViolations);

describe('<Booking />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right title HTML element', () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>,
      );

      const { title }: HelmetPropsToState = Helmet.peek();
      expect(title).toBe(bookingMetaData.title);
    });

    it('should have the `h2` HTML element as heading', () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>,
      );

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveTextContent(bookingMetaData.heading);
    });
  });
});
