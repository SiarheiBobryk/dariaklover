import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

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
        h1: function H1({ node, ...h1Props }) {
          return <Heading {...h1Props} />;
        },
        h2: function H2({ node, ...h2Props }) {
          return <Typography component="h2" variant="h6" sx={{ fontWeight: 400 }} {...h2Props} gutterBottom />;
        },
        img: function Img({ node, ...imgProps }) {
          const { alt = '', title: caption = '', src = '', ...other } = imgProps;
          return <Image fileName={src} alt={alt} caption={caption} {...other} />;
        },
        ol: function Ul({ node, ...olProps }) {
          const { ordered, ...other } = olProps;
          return <Box component="ol" {...other} />;
        },
        p: function P({ node, ...pProps }) {
          return <Paragraph {...pProps} />;
        },
        ul: function Ul({ node, ...ulProps }) {
          const { ordered, ...other } = ulProps;
          return <Box component="ul" {...other} />;
        },
        blockquote: function Blockquote({ node, ...blockquoteProps }) {
          return (
            <Paper
              component="blockquote"
              elevation={0}
              variant="outlined"
              sx={{
                margin: `${theme.spacing(2)} 0`,
                padding: theme.spacing(2),
                // Reset "margin-bottom" for the inner p element
                '& > p': {
                  marginBottom: 0,
                },
              }}
            >
              {blockquoteProps.children}
            </Paper>
          );
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
