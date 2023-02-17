import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult, screen } from '@testing-library/react';

import { typographyClasses } from '@mui/material/Typography';

import Paragraph from './Paragraph';

expect.extend(toHaveNoViolations);

describe('<Paragraph />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Paragraph>Lorem Imsulum</Paragraph>);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef();
      const { container } = render(<Paragraph ref={ref} />);
      expect(container.firstChild).toBe(ref.current);
    });
  });

  describe('Elements inspection', () => {
    it('should be the `p` HTML element by default', () => {
      render(<Paragraph>Дарья Кловер</Paragraph>);

      const paragraph: HTMLParagraphElement | null = document.querySelector('p');
      expect(paragraph).toHaveTextContent('Дарья Кловер');
    });

    it('should be the `i` HTML element', () => {
      render(<Paragraph component="i">Дарья Кловер</Paragraph>);

      const paragraph: HTMLElement | null = document.querySelector('i');
      expect(paragraph).toHaveTextContent('Дарья Кловер');
    });

    it('should have the CSS classes from `p` Typography variant by default', () => {
      render(<Paragraph>Дарья Кловер</Paragraph>);

      const p: HTMLParagraphElement = screen.getByText('Дарья Кловер');
      expect(p).toHaveClass(typographyClasses.body1);
    });

    it('should have the CSS classes from `strong` Typography variant', () => {
      render(<Paragraph variant="caption">Дарья Кловер</Paragraph>);

      const p: HTMLParagraphElement = screen.getByText('Дарья Кловер');
      expect(p).toHaveClass(typographyClasses.caption);
    });

    it('should have gutter', () => {
      render(<Paragraph>Дарья Кловер</Paragraph>);

      const p: HTMLParagraphElement = screen.getByText('Дарья Кловер');
      expect(p).toHaveStyle({
        marginBottom: '0.35em',
      });
    });
  });
});
