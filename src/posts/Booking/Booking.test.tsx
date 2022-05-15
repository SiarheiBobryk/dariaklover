import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import Booking from './Booking';

expect.extend(toHaveNoViolations);

describe('<Booking />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Booking heading="Lorem Ipsulum" />);

      // TODO: Find out the right type here 🤔
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly without props', () => {
      const booking: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<Booking />).toJSON();

      expect(booking).toMatchSnapshot();
    });

    it('should render correctly with props', () => {
      const booking: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
        .create(<Booking heading="Lorem Ipsulum" />)
        .toJSON();

      expect(booking).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the `h2` HTML element as heading', () => {
      render(<Booking />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toBeInTheDocument();
    });
  });
});
