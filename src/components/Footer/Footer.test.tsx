import * as React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Footer, { iconButtonA11yProps } from './Footer';
import { config } from '../../providers/AppConfigProvider';
import packageJson from '../../../package.json';

describe('<Footer />', () => {
  // TODO: Setup a11y testing by axe
  describe('snapshotting', () => {
    it('should render correctly', () => {
      // TODO: Add types for all test files
      const footer: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<Footer />).toJSON();
      expect(footer).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the right instagram icon button', () => {
      render(<Footer />);
      const a: HTMLElement | null = document.querySelector(`a[href="${config.instagram.href}"]`);
      expect(a).toHaveAttribute('rel', iconButtonA11yProps.rel);
      expect(a).toHaveAttribute('target', iconButtonA11yProps.target);
      expect(a).toHaveAttribute('aria-label', config.instagram.label);

      const svg: ChildNode | null | undefined = a?.firstChild;
      expect(svg).toHaveAttribute('data-testid', 'InstagramIcon');
    });

    it('should have the right telegram icon button', () => {
      render(<Footer />);
      const a: HTMLElement | null = document.querySelector(`a[href="${config.telegram.href}"]`);
      expect(a).toHaveAttribute('rel', iconButtonA11yProps.rel);
      expect(a).toHaveAttribute('target', iconButtonA11yProps.target);
      expect(a).toHaveAttribute('aria-label', config.telegram.label);

      const svg: ChildNode | null | undefined = a?.firstChild;
      expect(svg).toHaveAttribute('data-testid', 'TelegramIcon');
    });

    it('should render name and year', () => {
      render(<Footer />);
      const p: HTMLElement = screen.getByText(`${config.fullName} ${new Date().getFullYear()}`);
      expect(p).toBeInTheDocument();
    });

    it('should render the application version', () => {
      render(<Footer />);
      const p: HTMLElement = screen.getByText(`v.${packageJson.version}`);
      expect(p).toBeInTheDocument();
    });
  });

  describe('Styling inspection', () => {
    it('should be centered, direction column and have a gap', () => {
      render(<Footer data-testid="footer" />);
      const footer: HTMLElement = screen.getByTestId('footer');
      expect(footer).toHaveStyle({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      });
    });
  });
});
