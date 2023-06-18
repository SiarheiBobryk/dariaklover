import * as React from 'react';

import { render, RenderResult, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import packageJson from '../../../../../../package.json';
import { config } from '../../providers/AppConfigProvider';

import Footer, { iconButtonA11yProps } from './Footer';

expect.extend(toHaveNoViolations);

describe('<Footer />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<Footer />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right instagram icon button', () => {
      render(<Footer />);

      const a: HTMLAnchorElement | null = document.querySelector(`a[href="${config.instagram.href}"]`);
      expect(a).toHaveAttribute('rel', iconButtonA11yProps.rel);
      expect(a).toHaveAttribute('target', iconButtonA11yProps.target);
      expect(a).toHaveAttribute('aria-label', config.instagram.label);

      const svg: SVGElement | null = document.querySelector('svg[data-testid="InstagramIcon"]');
      expect(svg).toBeInTheDocument();
    });

    it('should have the right telegram icon button', () => {
      render(<Footer />);

      const a: HTMLAnchorElement | null = document.querySelector(`a[href="${config.telegram.href}"]`);
      expect(a).toHaveAttribute('rel', iconButtonA11yProps.rel);
      expect(a).toHaveAttribute('target', iconButtonA11yProps.target);
      expect(a).toHaveAttribute('aria-label', config.telegram.label);

      const svg: SVGElement | null = document.querySelector('svg[data-testid="TelegramIcon"]');
      expect(svg).toBeInTheDocument();
    });

    it('should render name and year', () => {
      render(<Footer />);

      const p: HTMLParagraphElement = screen.getByText(`${config.fullName} ${new Date().getFullYear()}`);
      expect(p).toBeInTheDocument();
    });

    it('should render the application version', () => {
      render(<Footer />);

      const a: HTMLAnchorElement = screen.getByText(`v${packageJson.version}`);
      expect(a).toBeInTheDocument();
    });
  });

  describe('Styling inspection', () => {
    it('should be centered, direction column and have a gap', () => {
      render(<Footer data-testid="footer" />);

      const footer: HTMLDivElement = screen.getByTestId('footer');
      expect(footer).toHaveStyle({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      });
    });
  });

  describe('The application version', () => {
    it('should match the tag on the GigHub side', () => {
      render(<Footer />);

      const a: HTMLAnchorElement = screen.getByText(`v${packageJson.version}`);
      const [, githubTag]: Array<string> = a.href.split(`${config.github}/releases/tag/`);
      expect(a.innerHTML).toBe(githubTag);
    });
  });
});
