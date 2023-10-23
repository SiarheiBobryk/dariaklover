import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Paragraph from './Paragraph';

expect.extend(toHaveNoViolations);

describe('<Paragraph />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Paragraph>Lorem Imsulum</Paragraph>);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef<HTMLParagraphElement>();
      const { container } = render(<Paragraph ref={ref} />);
      expect(container.firstChild).toBe(ref.current);
    });
  });
});
