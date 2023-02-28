import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Link from '@mui/material/Link';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import Heading from '../Heading';
import LinkBlank from '../LinkBlank';
import Paragraph from '../Paragraph';
import Image from '../Image';

export interface MarkdownProps {
  children: string;
}

function Markdown(props: MarkdownProps) {
  const { children = '' } = props;
  return (
    <ReactMarkdown
      /* eslint-disable react/no-unstable-nested-components */
      components={{
        h1: function H1({ node, ...h1Props }) {
          return <Heading {...h1Props} />;
        },
        p: function P({ node, ...pProps }) {
          return <Paragraph {...pProps} />;
        },
        a: function A({ node, ...aProps }) {
          const { children: aChildren, href, ...other } = aProps;
          const slashChar = '/';
          const isRelativePath = href?.[0] === slashChar;

          return isRelativePath ? (
            <Link component={RouterNavLink} to={href} {...other}>
              {aChildren}
            </Link>
          ) : (
            <LinkBlank href={href ?? ''} {...other}>
              {aChildren}
            </LinkBlank>
          );
        },
        img: function Img({ node, ...imgProps }) {
          const { alt = '', title: caption = '', src = '', ...other } = imgProps;
          return <Image fileName={src} alt={alt} caption={caption} {...other} />;
        },
      }}
      /* eslint-enable react/no-unstable-nested-components */
      remarkPlugins={[remarkGfm, remarkUnwrapImages]}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
