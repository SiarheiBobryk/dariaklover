import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Heading from './Heading';

expect.extend(toHaveNoViolations);

describe('<Heading />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Heading>Lorem Ipsulum</Heading>);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef<HTMLParagraphElement>();
      const { container } = render(<Heading ref={ref} />);
      expect(container.firstChild).toBe(ref.current);
    });
  });
});
