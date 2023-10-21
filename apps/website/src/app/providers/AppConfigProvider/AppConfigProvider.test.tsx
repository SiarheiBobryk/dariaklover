import * as React from 'react';

import { Config } from '@dariaklover/types';
import { render } from '@testing-library/react';

import { AppConfigContext, config } from './AppConfigProvider';

describe('AppConfigProvider', () => {
  describe('The context object inspection', () => {
    it('should hold all the values of the `config` object', () => {
      let context: Config | undefined;

      render(
        <AppConfigContext.Consumer>
          {function appConfigContext(value: Config) {
            context = value;
            return <div />;
          }}
        </AppConfigContext.Consumer>,
      );

      expect(context).toEqual(config);
    });
  });
});
