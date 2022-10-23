import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import LinkEmail from './LinkEmail';

expect.extend(toHaveNoViolations);

describe('<LinkEmail />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(<LinkEmail />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(<LinkEmail ref={ref} data-testid="LinkEmail" />);
    expect(screen.getByTestId('LinkEmail')).toBe(ref.current);
  });

  it('should render correctly', () => {
    const linkEmail: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<LinkEmail />).toJSON();
    expect(linkEmail).toMatchSnapshot();
  });
});
