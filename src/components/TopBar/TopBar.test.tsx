import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import TopBar from './TopBar';

expect.extend(toHaveNoViolations);

describe('<TopBar />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef();
      const { container }: RenderResult = render(
        <BrowserRouter>
          <TopBar ref={ref} />
        </BrowserRouter>,
      );
      expect(container.firstChild).toBe(ref.current);
    });
  });

  // TODO: Find out the way to test responsiveness
});
