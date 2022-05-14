import * as React from 'react';

import { styled } from '@mui/material/styles';
import SkeletonMui from '@mui/material/Skeleton';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Pagination, Navigation, A11y } from 'swiper';

import Heading from '../Heading';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

export const PUBLIC_PATH = 'responsive_images/reference_';

export interface ReferenceData {
  src: string;
  srcSet: string;
  alt: string;
  title: string;
}

export const references: ReferenceData[] = [
  {
    src: `${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_612.jpg`,
    srcSet: `${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_612.webp 612w`,
    alt: 'Отзыв 1',
    title: 'Помогаю найти мотивацию',
  },
  {
    src: `${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_599.jpg`,
    srcSet: `${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_599.webp 599w,`,
    alt: 'Отзыв 2',
    title: 'Помогаю включить желаемое состояние',
  },
  {
    src: `${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_615.jpg`,
    srcSet: `${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_615.webp 615w,`,
    alt: 'Отзыв 3',
    title: 'Помогаю наладить пищевое поведение',
  },
  {
    src: `${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_633.jpg`,
    srcSet: `${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_633.webp 633w`,
    alt: 'Отзыв 4',
    title: 'Помогаю в освоении полезных привычек',
  },
  {
    src: `${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_603.jpg`,
    srcSet: `${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_603.webp 603w`,
    alt: 'Отзыв 5',
    title: 'Помогаю определить истинные цели',
  },
  {
    src: `${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_624.jpg`,
    srcSet: `${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_624.webp 624w`,
    alt: 'Отзыв 6',
    title: 'Помогаю расставить приоритеты',
  },
  {
    src: `${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_639.jpg`,
    srcSet: `${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_639.webp 639w`,
    alt: 'Отзыв 7',
    title: 'Помогаю обрести душевный покой',
  },
  {
    src: `${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_626.jpg`,
    srcSet: `${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_626.webp 626w`,
    alt: 'Отзыв 8',
    title: 'Помогаю понять себя и свое тело',
  },
  {
    src: `${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_647.jpg`,
    srcSet: `${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_647.webp 647w`,
    alt: 'Отзыв 9',
    title: 'Помогаю найти в себе силы',
  },
];

export const Img = styled('img')(({ theme }) => {
  return {
    borderRadius: theme.spacing(1),
  };
});

export const Skeleton = styled(SkeletonMui)(({ theme }) => {
  return {
    position: 'absolute',
    borderRadius: theme.spacing(1),
  };
});

function References() {
  const height = '541';
  const width = '250';
  return (
    <>
      <Heading>Отзывы клиентов</Heading>
      <Swiper
        a11y={{
          enabled: true,
          nextSlideMessage: 'Следующий отзыв',
          prevSlideMessage: 'Предыдущий отзыв',
          paginationBulletMessage: 'Перейти на слайд {{index}}',
        }}
        grabCursor
        lazy={{
          enabled: true,
          loadOnTransitionStart: true,
        }}
        modules={[Lazy, Pagination, Navigation, A11y]}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        style={{ height: `${height}px` }}
      >
        {references.map(function mapReferences(item: ReferenceData) {
          return (
            <SwiperSlide key={item.src} style={{ display: 'flex', justifyContent: 'center' }}>
              <picture>
                <source type="image/webp" data-srcset={item.srcSet} />
                <source type="image/jpeg" data-srcset={item.src} />
                <Img data-src={item.src} alt={item.title} height={height} width={width} className="swiper-lazy" />
              </picture>
              <Skeleton variant="rectangular" height={`${height}px`} width={`${width}px`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default References;
