import * as React from 'react';
import { Link as RouterLink, useLocation, LinkProps } from 'react-router-dom';

import BreadcrumbsMui from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import aboutMetaData from '../../pages/About/aboutMetaData';
import articlesMetaData from '../../pages/Articles/articlesMetaData';
import bookingMetaData from '../../pages/Booking/bookingMetaData';
import certificatesMetaData from '../../pages/Certificates/certificatesMetaData';
import faqMetaData from '../../pages/Faq/faqMetaData';
import focusingOnHealthMetaData from '../../pages/FocusingOnHealth/focusingOnHealthMetaData';
import helpMetaData from '../../pages/Help/helpMetaData';
import howToBookMetaData from '../../pages/HowToBook/howToBookMetaData';
import mainMetaData from '../../pages/Main/mainMetaData';
import pricingMetaData from '../../pages/Pricing/pricingMetaData';
import referencesMetaData from '../../pages/References/referencesMetaData';
import { certificatesMap } from '../Certificates';

// SOMEDAY: Refactor breadcrumb names
const breadcrumbNameMapStatic: { [key: string]: string } = {
  [mainMetaData.path]: mainMetaData.breadcrumb,
  [aboutMetaData.path]: aboutMetaData.breadcrumb,
  [articlesMetaData.path]: articlesMetaData.breadcrumb,
  [bookingMetaData.path]: bookingMetaData.breadcrumb,
  [certificatesMetaData.path]: certificatesMetaData.breadcrumb,
  [faqMetaData.path]: faqMetaData.breadcrumb,
  [focusingOnHealthMetaData.path]: focusingOnHealthMetaData.breadcrumb,
  [helpMetaData.path]: helpMetaData.breadcrumb,
  [howToBookMetaData.path]: howToBookMetaData.breadcrumb,
  [pricingMetaData.path]: pricingMetaData.breadcrumb,
  [referencesMetaData.path]: referencesMetaData.breadcrumb,
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
      const { title, url: titleKey = '' } = certificatesMap[key] ?? {};
      return {
        ...certificatesBreadcrumbNameMapRaw,
        [titleKey]: title,
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
