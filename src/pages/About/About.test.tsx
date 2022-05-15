import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import About from './About';
import aboutMetaData from './aboutMetaData';

expect.extend(toHaveNoViolations);

describe('<About />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<About />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const about: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<About />).toJSON();
      expect(about).toMatchSnapshot();
    });
  });

  it('should have the right title HTML element', () => {
    render(<About />);

    const { title }: HelmetPropsToState = Helmet.peek();
    expect(title).toBe(aboutMetaData.title);
  });
});
