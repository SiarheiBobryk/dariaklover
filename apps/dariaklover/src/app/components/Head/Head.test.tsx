import * as React from 'react';
import { Helmet, HelmetPropsToState } from 'react-helmet';

import { render } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

import packageJson from '../../../../../../package.json';
import AppConfigProvider, { Config, config, MetaTags } from '../../providers/AppConfigProvider';

import Head from './Head';

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
      const tags: Array<keyof MetaTags> = ['description', 'keywords', 'msapplication-TileColor'];
      const metaTagsMapped: MetaTags = metaTags.reduce(function reduceMetaTags(tagsReduced: MetaTags, tag) {
        const { name, content }: HTMLMetaElement = tag;
        return {
          ...tagsReduced,
          ...(tags.includes(name as keyof MetaTags) && { [name]: content }),
        };
      }, {} as MetaTags);
      tags.forEach(function checkMetaTags(tag) {
        expect(metaTagsMapped[tag]).toBe(config[tag as keyof Config]);
      });
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
