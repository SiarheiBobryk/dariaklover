import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import HowToBook from './HowToBook';

expect.extend(toHaveNoViolations);

describe('<HowToBook />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BrowserRouter>
          <HowToBook />
        </BrowserRouter>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
