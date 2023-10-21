import * as React from 'react';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import AlertHelp from './AlertHelp';

expect.extend(toHaveNoViolations);

describe('<AlertHelp />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(<AlertHelp />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AlertHelp ref={ref} data-testid="AlertHelp" />);
    expect(screen.getByTestId('AlertHelp')).toBe(ref.current);
  });
});
