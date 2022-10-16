import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Image from './Image';

expect.extend(toHaveNoViolations);

describe('<Image />', () => {
  it('should match a11y standards without props', async () => {
    const { container }: RenderResult = render(
      <Image fileName="how-to-book-1" alt="Установка часового пояса" caption="Установка вашего часового пояса" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should forward ref', () => {
    const ref = React.createRef();
    render(
      <Image
        ref={ref}
        data-testid="Image"
        fileName="how-to-book-1"
        alt="Установка часового пояса"
        caption="Установка вашего часового пояса"
      />,
    );
    expect(screen.getByTestId('Image')).toBe(ref.current);
  });

  it('should render correctly', () => {
    const image: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
      .create(
        <Image fileName="how-to-book-1" alt="Установка часового пояса" caption="Установка вашего часового пояса" />,
      )
      .toJSON();
    expect(image).toMatchSnapshot();
  });
});
