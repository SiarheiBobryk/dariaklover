import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { typographyClasses } from '@mui/material/Typography';

import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
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
