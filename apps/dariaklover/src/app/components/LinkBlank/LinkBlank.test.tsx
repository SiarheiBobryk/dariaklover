import * as React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';

import LinkBlank from './LinkBlank';

expect.extend(toHaveNoViolations);

describe('<LinkBlank />', () => {
  describe('conformance', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <LinkBlank href="https://dariaklover.health">Lorem Ipsulum</LinkBlank>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef();
      const { container } = render(<LinkBlank href="https://dariaklover.health" ref={ref} />);
      expect(container.firstChild).toBe(ref.current);
    });
  });

  describe('Elements inspection', () => {
    it('should have the right `a` element with the right attributes', () => {
      render(<LinkBlank href="https://dariaklover.health">Дарья Кловер</LinkBlank>);

      const a: HTMLAnchorElement | null = document.querySelector('a');
      expect(a).toHaveTextContent('Дарья Кловер');
      expect(a).toHaveAttribute('href', 'https://dariaklover.health');
      expect(a).toHaveAttribute('target', '_blank');

      const svg: SVGElement | null = document.querySelector('svg[data-testid="OpenInNewIcon"]');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('CSS inspection', () => {
    it('should have the right `a` element with the right attributes', () => {
      render(<LinkBlank href="https://dariaklover.health">Дарья Кловер</LinkBlank>);

      const svg: SVGElement | null = document.querySelector('svg[data-testid="OpenInNewIcon"]');
      expect(svg).toHaveStyle({
        verticalAlign: 'middle',
      });
    });
  });
});
