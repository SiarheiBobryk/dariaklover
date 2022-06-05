import * as React from 'react';

import { render, RenderResult, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import AlertTitle from '@mui/material/AlertTitle';

import AlertClosable from './AlertClosable';

expect.extend(toHaveNoViolations);

describe('<AlertClosable />', () => {
  describe('conformance', () => {
    it('should match a11y standards without props', async () => {
      const { container }: RenderResult = render(<AlertClosable />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should match a11y standards with props', async () => {
      const { container }: RenderResult = render(
        <AlertClosable data-alert-id="testAlert" onClose={() => {}} open>
          <AlertTitle>Lorem Ipsulum</AlertTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          molestias cum vitae similique doloribus odit at adipisci corrupti beatae. Repellendus corporis commodi maiores
          harum culpa reprehenderit rerum quos aperiam. Perspiciatis?
        </AlertClosable>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should forward ref', () => {
      const ref = React.createRef();
      render(<AlertClosable ref={ref} data-testid="AlertClosable" />);
      expect(screen.getByTestId('AlertClosable')).toBe(ref.current);
    });
  });

  describe('snapshotting', () => {
    it('should render correctly', () => {
      const alertClosable: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
        .create(<AlertClosable />)
        .toJSON();
      expect(alertClosable).toMatchSnapshot();
    });

    it('should render correctly with a props and content', () => {
      const alertClosable: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
        .create(
          <AlertClosable data-alert-id="testAlert" onClose={() => {}} open>
            <AlertTitle>Lorem Ipsulum</AlertTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            molestias cum vitae similique doloribus odit at adipisci corrupti beatae. Repellendus corporis commodi
            maiores harum culpa reprehenderit rerum quos aperiam. Perspiciatis?
          </AlertClosable>,
        )
        .toJSON();
      expect(alertClosable).toMatchSnapshot();
    });
  });

  describe('elements inspection', () => {
    it('should have margin-top and margin-bottom equal to 8px', () => {
      render(
        <AlertClosable>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, placeat corrupti. Corrupti doloribus impedit
          dolores, fugit at, provident asperiores odit beatae deleniti nemo aliquam. Consequatur minima eum porro
          distinctio nulla?
        </AlertClosable>,
      );
      const alert: HTMLElement | null = document.querySelector('.MuiAlert-root');
      expect(alert).toHaveStyle({
        marginTop: '8px',
        marginBottom: '8px',
      });
    });
  });
});
