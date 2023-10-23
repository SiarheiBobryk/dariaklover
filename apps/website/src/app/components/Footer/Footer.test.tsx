import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Footer from './Footer';

expect.extend(toHaveNoViolations);

describe('<Footer />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Footer />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
