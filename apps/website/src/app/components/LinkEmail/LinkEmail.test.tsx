import * as React from 'react';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import LinkEmail from './LinkEmail';

expect.extend(toHaveNoViolations);

describe('<LinkEmail />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(<LinkEmail />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(<LinkEmail ref={ref} data-testid="LinkEmail" />);
    expect(screen.getByTestId('LinkEmail')).toBe(ref.current);
  });
});
