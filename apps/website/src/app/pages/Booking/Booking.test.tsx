import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

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

    it('should have the `h1` HTML element as heading', () => {
      render(
        <BrowserRouter>
          <Booking />
        </BrowserRouter>,
      );

      const h1: HTMLHeadingElement | null = document.querySelector('h1');
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveTextContent(bookingMetaData.heading);
    });
  });
});
