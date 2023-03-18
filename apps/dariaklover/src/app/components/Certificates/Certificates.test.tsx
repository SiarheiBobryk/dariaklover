import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult, screen } from '@testing-library/react';

import Certificates from './Certificates';

expect.extend(toHaveNoViolations);

describe('<Certificates />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(
      <Certificates
        fileName="how-to-book-1"
        alt="Установка часового пояса"
        caption="Установка вашего часового пояса"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(
      <Certificates
        ref={ref}
        data-testid="Certificates"
        fileName="how-to-book-1"
        alt="Установка часового пояса"
        caption="Установка вашего часового пояса"
      />,
    );
    expect(screen.getByTestId('Certificates')).toBe(ref.current);
  });
});
