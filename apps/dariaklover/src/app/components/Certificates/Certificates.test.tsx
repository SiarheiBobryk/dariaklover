import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Certificates from './Certificates';

expect.extend(toHaveNoViolations);

describe('<Certificates />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(
      <BrowserRouter>
        <Certificates />
      </BrowserRouter>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(
      <BrowserRouter>
        <Certificates ref={ref} data-testid="Certificates" />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('Certificates')).toBe(ref.current);
  });
});
