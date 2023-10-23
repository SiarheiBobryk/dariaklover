import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import LinkBlank from './LinkBlank';

expect.extend(toHaveNoViolations);

describe('<LinkBlank />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <LinkBlank href="https://dariaklover.health">Lorem Ipsulum</LinkBlank>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef<HTMLAnchorElement>();
      const { container } = render(<LinkBlank href="https://dariaklover.health" ref={ref} />);
      expect(container.firstChild).toBe(ref.current);
    });
  });
});
