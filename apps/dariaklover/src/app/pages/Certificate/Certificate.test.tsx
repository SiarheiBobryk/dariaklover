import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';

import Certificate from './Certificate';

expect.extend(toHaveNoViolations);

describe('<Certificate />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BrowserRouter>
          <Certificate />
        </BrowserRouter>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
