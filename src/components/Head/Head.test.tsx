import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

import Head from './Head';
import AppConfigProvider, { config, MetaTags } from '../../providers/AppConfigProvider';
import packageJson from '../../../package.json';

expect.extend(toHaveNoViolations);

describe('<App />', () => {
  describe('Application managed tags of `head` inspection', () => {
    it('should have the right essential tags', () => {
      render(
        <AppConfigProvider>
          <Head />
        </AppConfigProvider>,
      );

      const { title, htmlAttributes }: HelmetPropsToState = Helmet.peek();
      expect(title).toBe(undefined); // We set `title` within `App`s children
      expect(htmlAttributes?.lang).toBe(config.language);
    });

    it('should have the right meta tags', () => {
      render(
        <AppConfigProvider>
          <Head />
        </AppConfigProvider>,
      );

      const { metaTags }: HelmetPropsToState = Helmet.peek();
      const tags = ['description', 'keywords', 'msapplication-config', 'msapplication-TileColor', 'theme-color'];
      const metaTagsMapped: MetaTags = metaTags.reduce(function reduceMetaTags(tagsReduced, tag) {
        const { name, content }: HTMLMetaElement = tag;
        return {
          ...tagsReduced,
          ...(tags.includes(name) && { [name]: content }),
        };
      }, {} as MetaTags);
      expect(metaTagsMapped.description).toBe(config.description);
      expect(metaTagsMapped.keywords).toBe(config.keywords);
      expect(metaTagsMapped['msapplication-TileColor']).toBe(config['msapplication-TileColor']);
      expect(metaTagsMapped['msapplication-config']).toBe(`${config['msapplication-config']}?v=${packageJson.version}`);
      // TODO: Implement color-mode tests
      expect(metaTagsMapped['theme-color']).toBe('#fff'); // White by default
    });

    it('should have the right application version in the URL', () => {
      render(
        <AppConfigProvider>
          <Head />
        </AppConfigProvider>,
      );

      const { linkTags }: HelmetPropsToState = Helmet.peek();
      linkTags.forEach(function checkApplicationVersion(link: HTMLLinkElement) {
        const { href } = link;
        expect(href).toContain(`?v=${packageJson.version}`);
      });
    });
  });
});
