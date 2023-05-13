import * as React from 'react';

import Typography from '@mui/material/Typography';
import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import BookingCard from './BookingCard';

expect.extend(toHaveNoViolations);

describe('<BookingCard />', () => {
  describe('a11y', () => {
    it('should match a11y standards', async () => {
      const { container }: RenderResult = render(
        <BookingCard>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui incidunt dolores vel placeat, sequi tenetur
            earum molestiae deleniti cupiditate sapiente error natus ducimus ad eligendi illo itaque! Nemo, velit et.
          </Typography>
        </BookingCard>,
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
