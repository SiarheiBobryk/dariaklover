import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Faq from './Faq';

expect.extend(toHaveNoViolations);

describe('<Faq />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BrowserRouter>
          <Faq />
        </BrowserRouter>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const howToBook: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
        .create(
          <BrowserRouter>
            <Faq />
          </BrowserRouter>,
        )
        .toJSON();
      expect(howToBook).toMatchSnapshot();
    });
  });
});
