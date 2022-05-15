import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { typographyClasses } from '@mui/material/Typography';

import About, { aboutConstants } from './About';
import { config } from '../../providers/AppConfigProvider';

expect.extend(toHaveNoViolations);

describe('<About />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(<About heading="Lorem Ipsulum" />);

      // TODO: Find out the right type here 🤔
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('snapshotting', () => {
    it('should render correctly without props', () => {
      const about: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer.create(<About />).toJSON();

      expect(about).toMatchSnapshot();
    });

    it('should render correctly with props', () => {
      const about: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
        .create(<About heading="Lorem Ipsulum" />)
        .toJSON();

      expect(about).toMatchSnapshot();
    });
  });

  describe('Elements inspection', () => {
    it('should have the `h2` HTML element as heading', () => {
      render(<About />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toBeInTheDocument();
    });

    it('should have the CSS classes from `h5` Typography variant by default', () => {
      render(<About />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toHaveClass(typographyClasses.h5);
    });

    it('should have the right constants', () => {
      render(<About heading="Lorem Ipsulum" />);

      const h2: HTMLHeadingElement | null = document.querySelector('h2');
      expect(h2).toHaveTextContent('Lorem Ipsulum');

      const i: HTMLElement | null = document.querySelector('i');
      expect(i).toHaveTextContent(aboutConstants.spell);
    });

    it('should have the right `a` element with the right attributes', () => {
      render(<About />);

      const a: HTMLAnchorElement | null = document.querySelector('a');
      expect(a).toHaveTextContent(config.instagram.id);
      expect(a).toHaveAttribute('href', config.instagram.href);
      expect(a).toHaveAttribute('target', '_blank');
    });

    // TODO: find out how to check the space char between the link here and for other component 🤔
  });
});
