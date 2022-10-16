import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import AlertHelp from './AlertHelp';

expect.extend(toHaveNoViolations);

describe('<AlertHelp />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(<AlertHelp />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(<AlertHelp ref={ref} data-testid="AlertHelp" />);
    expect(screen.getByTestId('AlertHelp')).toBe(ref.current);
  });

  it('should render correctly', () => {
    const alertHelp: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<AlertHelp />).toJSON();
    expect(alertHelp).toMatchSnapshot();
  });
});
