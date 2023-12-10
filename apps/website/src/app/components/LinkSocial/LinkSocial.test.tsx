import { createRef } from 'react';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import LinkSocial from './LinkSocial';

expect.extend(toHaveNoViolations);

describe('<LinkSocial />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(<LinkSocial />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<LinkSocial ref={ref} data-testid="LinkSocial" />);
    expect(screen.getByTestId('LinkSocial')).toBe(ref.current);
  });
});
