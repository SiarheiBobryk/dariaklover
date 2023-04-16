import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Theme, useMediaQuery, useTheme } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const { NX_IMAGES_PATH = '' } = process.env;

export interface Certificate {
  id: string;
  url: string;
  img: string;
  title: string;
  titleFull: string;
  subtitle: string;
  subtitleFull: string;
}

// TODO: Review the image storage and remove unused images
export const certificates: Array<Certificate> = [
  {
    id: 'diploma-health-coach',
    url: '/certificates/diploma-health-coach',
    img: `${NX_IMAGES_PATH}/diploma-health-coach.jpg`,
    title: 'Health coach ("Health coaching")',
    titleFull:
      'Прошла профессиональную переподготовку по программе "Модификация образа жизни и немедикаментозное оздоровление" (HEALTH COACHING). Диплом предоставляет право на ведение профессиональной деятельности в сфере Консультирование в области здорового образа жизни и немедикаментозного оздоровления и подтверждает присвоение квалификации "Специалист по модификации образа жизни и немедикаментозному оздоровлению" (HEALTH COACH)',
    subtitle: 'Университет образовательной медицины',
    subtitleFull: 'Университет образовательной медицины / Preventage Lifestyle School',
  },
  {
    id: 'diploma-attachment-health-coach',
    url: '/certificates/diploma-attachment-health-coach',
    img: `${NX_IMAGES_PATH}/diploma-attachment-health-coach.jpg`,
    title: 'Приложение к диплому',
    titleFull: 'Приложение к диплому N 772413895581',
    subtitle: 'Университет образовательной медицины',
    subtitleFull: 'Университет образовательной медицины / Preventage Lifestyle School',
  },
  {
    id: 'certificate-health-coach',
    url: '/certificates/certificate-health-coach',
    img: `${NX_IMAGES_PATH}/certificate-health-coach.jpg`,
    title: 'Tools for health and wellness coaching',
    titleFull: 'Participated in the professional integrative training program "Tools for health and wellness coaching"',
    subtitle: 'European Coaching Association',
    subtitleFull: 'Университет образовательной медицины / European Coaching Association',
  },
  {
    id: 'diploma-doctor-1',
    url: '/certificates/diploma-doctor-1',
    img: `${NX_IMAGES_PATH}/diploma-doctor-1.jpg`,
    title: 'Врач ("Лечебное дело")',
    titleFull: 'Окончила полный курс университета по специальности "Лечебное дело". Присвоена квалификация "Врач".',
    subtitle: 'Гомельский государственный медицинский университет',
    subtitleFull: 'Гомельский государственный медицинский университет',
  },
  {
    id: 'certificate-high-stress',
    url: '/certificates/certificate-high-stress',
    img: `${NX_IMAGES_PATH}/certificate-high-stress.jpg`,
    title: 'Hавыки самоподдержки при сильном стрессе',
    titleFull: 'Нутрициологический и коучинговый практикум по навыкам самоподдержки при сильном стрессе',
    subtitle: 'Университет образовательной медицины',
    subtitleFull: 'Университет образовательной медицины',
  },
  {
    id: 'certificate-name-changing',
    url: '/certificates/certificate-name-changing',
    img: `${NX_IMAGES_PATH}/certificate-name-changing.jpg`,
    title: 'Смена имени',
    titleFull: 'Свидетельство о перемене имени',
    subtitle: 'ЗАГС города Гомеля',
    subtitleFull: 'Отдел ЗАГС администрации Центрального района г.Гомеля',
  },
  {
    id: 'certificate-hypnosis',
    url: '/certificates/certificate-hypnosis',
    img: `${NX_IMAGES_PATH}/certificate-hypnosis.jpg`,
    title: 'Oсновы эриксоновского гипноза',
    titleFull: 'Oсновы эриксоновского гипноза',
    subtitle: 'Университет образовательной медицины',
    subtitleFull: 'Университет образовательной медицины / Preventage Lifestyle School',
  },
];

export type CertificateData = Omit<Certificate, 'id'>;

export interface CertificatesMap {
  [key: string]: CertificateData;
}

export const certificatesMap: CertificatesMap = certificates.reduce(function reduceCertificates(mapping, cur) {
  const { id, ...properties } = cur;
  return {
    ...mapping,
    [id]: {
      ...properties,
    },
  };
}, {});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CertificatesProps {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Certificates = React.forwardRef(function Certificates(props: CertificatesProps, ref: React.Ref<any>) {
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
    <ImageList ref={ref} variant="standard" cols={columns} gap={8} {...props}>
      {certificates.map((certificate) => {
        return (
          <ImageListItem key={certificate.img} cols={1} rows={1}>
            {/* TODO: Add a skeleton maybe 🤔 */}
            <img src={certificate.img} alt={certificate.title} loading="lazy" />
            <ImageListItemBar
              title={certificate.title}
              subtitle={certificate.subtitle}
              position="bottom"
              actionPosition="right"
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`Подробная информация о ${certificate.title}`}
                  onClick={() => {
                    return navigateToCertificate(certificate.id);
                  }}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
});

export default Certificates;
