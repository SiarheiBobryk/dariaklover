import { ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { MDXProvider as MDXProviderOrig } from '@mdx-js/react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { MDXComponents } from 'mdx/types';

import LinkBlank from '../../components/LinkBlank';

const components: MDXComponents = {
  a: function A(props) {
    const { children, href } = props;
    const slashChar = '/';
    const isRelativePath = href?.[0] === slashChar;

    return isRelativePath ? (
      <Link component={RouterNavLink} to={href}>
        {children}
      </Link>
    ) : (
      <LinkBlank href={href ?? ''}>{children}</LinkBlank>
    );
  },
  h1: function H1(props) {
    const { children } = props;
    return (
      <Typography component="h1" variant="h4" gutterBottom>
        {children}
      </Typography>
    );
  },
  h2: function H2(props) {
    const { children } = props;
    return (
      <Typography component="h2" variant="h5" gutterBottom>
        {children}
      </Typography>
    );
  },
  h3: function H3(props) {
    const { children } = props;
    return (
      <Typography component="h3" variant="h6" fontWeight={400} gutterBottom>
        {children}
      </Typography>
    );
  },
  p: function P(props) {
    const { children } = props;
    return <Typography gutterBottom>{children}</Typography>;
  },
  ol: function Ol(props) {
    const { children } = props;
    return <Box component="ol">{children}</Box>;
  },
  ul: function Ul(props) {
    const { children } = props;
    return <Box component="ul">{children}</Box>;
  },
};

export interface MDXProviderProps {
  children: ReactNode;
}

function MDXProvider(props: MDXProviderProps) {
  const { children } = props;
  return <MDXProviderOrig components={components}>{children}</MDXProviderOrig>;
}

export default MDXProvider;
