import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
  const theme = useTheme();
  return (
    <ReactMarkdown
      /* eslint-disable react/no-unstable-nested-components */
      // TODO: Refactor the mapping here
      components={{
        h1: function H1({ node, ...h1Props }) {
          return <Heading {...h1Props} />;
        },
        h2: function H2({ node, ...h2Props }) {
          return <Typography component="h2" variant="h6" sx={{ fontWeight: 400 }} {...h2Props} />;
        },
        p: function P({ node, ...pProps }) {
          return <Paragraph {...pProps} />;
        },
        ul: function Ul({ node, ...ulProps }) {
          return <Box component="ul" sx={{ paddingLeft: theme.spacing(2), marginTop: 0 }} {...ulProps} />;
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
