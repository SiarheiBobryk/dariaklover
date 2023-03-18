import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Theme, useMediaQuery, useTheme } from '@mui/material';

export const PUBLIC_PATH = 'assets/responsive_images';

// TODO: Review the image storage and remove unused images
const itemData = [
  {
    img: `${PUBLIC_PATH}/certificate-health-coach.jpg`,
    title: 'TODO: Add a title here',
    subtitle: 'TODO: Add a subtitle (if applicable)',
  },
  {
    img: `${PUBLIC_PATH}/diploma-health-coath.jpg`,
    title: 'TODO: Add a title here',
    subtitle: 'TODO: Add a subtitle (if applicable)',
  },
  {
    img: `${PUBLIC_PATH}/diploma-doctor-1.jpg`,
    title: 'TODO: Add a title here',
    subtitle: 'TODO: Add a subtitle (if applicable)',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CertificatesProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Certificates = React.forwardRef(function Certificates(_: CertificatesProps, ref: React.Ref<any>) {
  const theme: Theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));
  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const isXSmall = useMediaQuery(theme.breakpoints.up('xs'));
  const columns = React.useMemo(
    function memoizeColumns() {
      if (isMedium) {
        return 3;
      }
      if (isSmall) {
        return 2;
      }
      if (isXSmall) {
        return 1;
      }
      return 3;
    },
    [isMedium, isSmall, isXSmall],
  );

  return (
    <ImageList ref={ref} variant="standard" cols={columns} gap={8}>
      {itemData.map((item) => {
        return (
          // TODO: Remove default props
          // TODO: Make cols responsive
          <ImageListItem key={item.img} cols={1} rows={1}>
            {/* TODO: Add a skeleton maybe 🤔 */}
            {/* TODO: Review the "alt" attr */}
            <img src={item.img} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subtitle}
              position="below"
              // actionPosition="right"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
});

export default Certificates;
