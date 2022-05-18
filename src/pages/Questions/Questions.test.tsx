import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import Questions from './Questions';
import questionsMetaData from './questionsMetaData';

expect.extend(toHaveNoViolations);

describe('<Questions />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Questions />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const about: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<Questions />).toJSON();
      expect(about).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right title HTML element', () => {
      render(<Questions />);

      const { title }: HelmetPropsToState = Helmet.peek();
      expect(title).toBe(questionsMetaData.title);
    });

    it('should have the `h2` HTML element as heading', () => {
      render(<Questions />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveTextContent(questionsMetaData.heading);
    });
  });
});
