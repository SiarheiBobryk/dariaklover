import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import Questions from './Questions';

expect.extend(toHaveNoViolations);

describe('<Questions />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Questions heading="Lorem Ipsulum" />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const questions: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<Questions />).toJSON();
      expect(questions).toMatchSnapshot();
    });
  });
});
