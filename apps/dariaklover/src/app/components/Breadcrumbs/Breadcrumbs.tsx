import * as React from 'react';

import { Link as RouterLink, useLocation, LinkProps } from 'react-router-dom';

import BreadcrumbsMui from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import aboutMetaData from '../../pages/About/aboutMetaData';
import bookingMetaData from '../../pages/Booking/bookingMetaData';
import certificatesMetaData from '../../pages/Certificates/certificatesMetaData';
import faqMetaData from '../../pages/Faq/faqMetaData';
import helpMetaData from '../../pages/Help/helpMetaData';
import howToBookMetaData from '../../pages/HowToBook/howToBookMetaData';
import mainMetaData from '../../pages/Main/mainMetaData';
import referencesMetaData from '../../pages/References/referencesMetaData';
import pricingMetaData from '../../pages/Pricing/pricingMetaData';
import { certificatesMap } from '../Certificates';

const breadcrumbNameMapStatic: { [key: string]: string } = {
  [mainMetaData.path]: mainMetaData.heading,
  [aboutMetaData.path]: aboutMetaData.heading,
  [bookingMetaData.path]: bookingMetaData.heading,
  [certificatesMetaData.path]: certificatesMetaData.heading,
  [faqMetaData.path]: faqMetaData.heading,
  [helpMetaData.path]: helpMetaData.heading,
  [howToBookMetaData.path]: howToBookMetaData.heading,
  [pricingMetaData.path]: pricingMetaData.heading,
  [referencesMetaData.path]: referencesMetaData.heading,
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return (
    <Link
      {...props}
      component={RouterLink}
      sx={{
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BreadcrumbsProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Breadcrumbs = React.forwardRef(function Breadcrumbs(props: BreadcrumbsProps, ref: React.Ref<any>) {
  const location = useLocation();
  const pathnames = React.useMemo(
    function memoizePathnames() {
      return location.pathname.split('/').filter(function filterPathnames(x) {
        return x;
      });
    },
    [location],
  );

  const certificatesBreadcrumbNameMap: { [key: string]: string } = React.useMemo(function memoizeCertificatesBread() {
    return Object.keys(certificatesMap).reduce(function reduceCertificatesMap(certificatesBreadcrumbNameMapRaw, key) {
      return {
        ...certificatesBreadcrumbNameMapRaw,
        [certificatesMap[key].url]: certificatesMap[key].title,
      };
    }, {});
  }, []);
  const breadcrumbNameMap: { [key: string]: string } = {
    ...breadcrumbNameMapStatic,
    ...certificatesBreadcrumbNameMap,
  };

  return (
    <BreadcrumbsMui ref={ref} aria-label="breadcrumb" sx={{ marginY: 3 }} {...props}>
      <LinkRouter color="inherit" to={mainMetaData.path}>
        Главная
      </LinkRouter>
      {pathnames.map(function mapPathname(value, index) {
        const last: boolean = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        if (!breadcrumbNameMap[to]) {
          // Special case: an unsupported URL is used, so we don't render the data for it
          return null;
        }

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </BreadcrumbsMui>
  );
});

export default Breadcrumbs;
