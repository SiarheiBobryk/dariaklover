import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import Main, { mainMetaData } from './Main';

expect.extend(toHaveNoViolations);

describe('<Main />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Main />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const main: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<Main />).toJSON();
      expect(main).toMatchSnapshot();
    });
  });

  it('should have the right title HTML element', () => {
    render(<Main />);

    const { title }: HelmetPropsToState = Helmet.peek();
    expect(title).toBe(mainMetaData.title);
  });
});
