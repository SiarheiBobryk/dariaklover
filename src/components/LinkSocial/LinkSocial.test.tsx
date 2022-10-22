import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import LinkSocial from './LinkSocial';

expect.extend(toHaveNoViolations);

describe('<LinkSocial />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(<LinkSocial />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(<LinkSocial ref={ref} data-testid="LinkSocial" />);
    expect(screen.getByTestId('LinkSocial')).toBe(ref.current);
  });

  it('should render correctly', () => {
    const alertHelp: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<LinkSocial />).toJSON();
    expect(alertHelp).toMatchSnapshot();
  });
});
