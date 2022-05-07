import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import References from './References';

expect.extend(toHaveNoViolations);

describe('<References />', () => {
  describe('conformance', () => {
    // NOTE: Create React App doesn't support pure ESM packages yet.
    it.skip('should match a11y standards', async () => {
      const { container }: RenderResult = render(<References />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it.skip('should render correctly', () => {
      const references: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
        .create(<References />)
        .toJSON();
      expect(references).toMatchSnapshot();
    });
  });
});
