import * as React from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { typographyClasses } from '@mui/material/Typography';

import Paragraph from './Paragraph';

expect.extend(toHaveNoViolations);

describe('<Paragraph />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container } = render(<Paragraph>Lorem Imsulum</Paragraph>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly without a content', () => {
      const paragraph = renderer.create(<Paragraph />).toJSON();
      expect(paragraph).toMatchSnapshot();
    });
    it('should render correctly with a content', () => {
      const paragraph = renderer.create(<Paragraph>Lorem Ipsulum</Paragraph>).toJSON();
      expect(paragraph).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should be the `p` HTML element by default', () => {
      render(<Paragraph>Дарья Кловер</Paragraph>);
      const paragraph = document.querySelector('p');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent('Дарья Кловер');
    });

    it('should be the `i` HTML element', () => {
      render(<Paragraph component="i">Дарья Кловер</Paragraph>);
      const paragraph = document.querySelector('i');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent('Дарья Кловер');
    });

    it('should have the CSS classes from `p` Typography variant by default', () => {
      render(<Paragraph>Дарья Кловер</Paragraph>);
      expect(screen.getByText('Дарья Кловер')).toHaveClass(typographyClasses.body1);
    });

    it('should have the CSS classes from `strong` Typography variant', () => {
      render(<Paragraph variant="caption">Дарья Кловер</Paragraph>);
      expect(screen.getByText('Дарья Кловер')).toHaveClass(typographyClasses.caption);
    });
  });
});
