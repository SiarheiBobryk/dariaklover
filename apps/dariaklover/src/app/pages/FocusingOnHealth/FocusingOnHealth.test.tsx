import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import FocusingOnHealth from './FocusingOnHealth';

expect.extend(toHaveNoViolations);

describe('<FocusingOnHealth />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BrowserRouter>
          <FocusingOnHealth />
        </BrowserRouter>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
