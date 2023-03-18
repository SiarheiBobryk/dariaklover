import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Theme, useMediaQuery, useTheme } from '@mui/material';

export const PUBLIC_PATH = 'assets/responsive_images';

// TODO: Review the image storage and remove unused images
export const certificates = [
  {
    id: 'certificate-health-coach',
    url: '/certificates/certificate-health-coach',
    img: `${PUBLIC_PATH}/certificate-health-coach.jpg`,
    title: 'Tools for health and wellness coaching',
    subtitle: 'Европейская ассоциация коучинга',
  },
  {
    id: 'diploma-health-coach',
    url: '/certificates/diploma-health-coach',
    img: `${PUBLIC_PATH}/diploma-health-coach.jpg`,
    title: 'Health coach ("Health coaching")',
    subtitle: 'Университет образовательной медицины',
  },
  {
    id: 'diploma-doctor-1',
    url: '/certificates/diploma-doctor-1',
    img: `${PUBLIC_PATH}/diploma-doctor-1.jpg`,
    title: 'Врач ("Лечебное дело")',
    subtitle: 'Медицинский университет',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CertificatesProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Certificates = React.forwardRef(function Certificates(_: CertificatesProps, ref: React.Ref<any>) {
  const navigate = useNavigate();
  const navigateToCertificate = React.useCallback(
    function memoizeNavigateToCertificate(certificateId: string) {
      navigate(`/certificates/${certificateId}`);
    },
    [navigate],
  );

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
      {certificates.map((certificate) => {
        return (
          // TODO: Remove default props
          // TODO: Make cols responsive
          <ImageListItem
            key={certificate.img}
            cols={1}
            rows={1}
            onClick={() => {
              return navigateToCertificate(certificate.id);
            }}
          >
            {/* TODO: Add a skeleton maybe 🤔 */}
            {/* TODO: Review the "alt" attr */}
            <img src={certificate.img} alt={certificate.title} loading="lazy" />
            <ImageListItemBar
              title={certificate.title}
              subtitle={certificate.subtitle}
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
