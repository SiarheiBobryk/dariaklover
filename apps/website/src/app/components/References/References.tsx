import { useCallback, useState } from 'react';

import { ReferenceData, SwiperClass } from '@dariaklover/types';
import Box from '@mui/material/Box';
import SkeletonMui from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';

import Heading from '../Heading';

// eslint-disable-next-line import/extensions
import { references } from './references.data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.spacing(1),
  };
});

export const Skeleton = styled(SkeletonMui)(function styleSkeleton({ theme }) {
  return {
    position: 'absolute',
    borderRadius: theme.spacing(1),
  };
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReferencesProps {}

function References() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const height = 541;
  const width = 250;
  const appTheme = useTheme();

  const handleOnSlideChange = useCallback(
    function handleOnSlideChange(swiper: SwiperClass) {
      const { activeIndex } = swiper;
      setCurrentSlideIndex(Number(activeIndex));
    },
    [setCurrentSlideIndex],
  );

  const referencesReversed = [...references].reverse();
  const { title = '' } = referencesReversed[currentSlideIndex] ?? {};
  const { description, src: descriptionId } = referencesReversed[currentSlideIndex] ?? {};

  const swiperOptions: SwiperOptions = {
    a11y: {
      enabled: true,
      nextSlideMessage: 'Следующий отзыв',
      prevSlideMessage: 'Предыдущий отзыв',
      paginationBulletMessage: 'Перейти на слайд {{index}}',
    },
    grabCursor: true,
    modules: [Pagination, Navigation, A11y],
    navigation: true,
    pagination: {
      dynamicBullets: true,
    },
  };

  return (
    <>
      <Heading component="h2" variant="h6">
        {title}
      </Heading>
      <Swiper
        onSlideChange={handleOnSlideChange}
        style={{
          height: appTheme.typography.pxToRem(height),
          marginTop: appTheme.typography.pxToRem(8),
          marginBottom: appTheme.typography.pxToRem(8),
        }}
        {...swiperOptions}
      >
        {referencesReversed.map(function mapReferences(item: ReferenceData) {
          return (
            <SwiperSlide key={item.src} style={{ display: 'flex', justifyContent: 'center' }}>
              <Skeleton
                variant="rectangular"
                height={appTheme.typography.pxToRem(height)}
                width={appTheme.typography.pxToRem(width)}
              />
              <Box component="picture" sx={{ zIndex: 2 }}>
                <source type="image/webp" data-srcset={item.srcSet} />
                <source type="image/jpeg" data-srcset={item.src} />
                <Img
                  aria-describedby={item.src}
                  src={item.src}
                  alt={item.title}
                  height={height}
                  width={width}
                  className="swiper-lazy"
                  loading="lazy"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Typography id={descriptionId} component="blockquote" sx={{ p: 1, fontStyle: 'italic' }}>
        {description}
      </Typography>
    </>
  );
}

export default References;
