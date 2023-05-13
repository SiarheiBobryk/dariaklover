import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Breadcrumbs from './Breadcrumbs';

expect.extend(toHaveNoViolations);

describe('<Breadcrumbs />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(
      <BrowserRouter>
        <Breadcrumbs ref={ref} data-testid="Breadcrumbs" />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('Breadcrumbs')).toBe(ref.current);
  });
});
