import * as React from 'react';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Certificate from './Certificate';

expect.extend(toHaveNoViolations);

describe('<Certificate />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(
      <Certificate
        certificateId="diploma-health-coach"
        title='Health coach ("Health coaching")'
        subtitle="Университет образовательной медицины / Preventage Lifestyle School"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(
      <Certificate
        ref={ref}
        data-testid="Certificate"
        certificateId="diploma-health-coach"
        title='Health coach ("Health coaching")'
        subtitle="Университет образовательной медицины / Preventage Lifestyle School"
      />,
    );
    expect(screen.getByTestId('Certificate')).toBe(ref.current);
  });
});
