import * as React from 'react';

import { styled } from '@mui/material/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Pagination, Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    srcSet: `
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_300.webp 300w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_380.webp 380w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_442.webp 442w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_504.webp 504w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_566.webp 566w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_612.webp 612w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_659.webp 659w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_708.webp 708w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_742.webp 742w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_786.webp 786w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_829.webp 829w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_870.webp 870w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_901.webp 901w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_942.webp 942w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_965.webp 965w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_984.webp 984w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1041.webp 1041w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1060.webp 1060w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 1',
    title: 'Помогаю найти мотивацию',
  },
  {
    src: `${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_599.jpg`,
    srcSet: `
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_294.webp 294w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_370.webp 370w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_436.webp 436w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_498.webp 498w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_551.webp 551w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_599.webp 599w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_649.webp 649w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_695.webp 695w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_741.webp 741w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_785.webp 785w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_813.webp 813w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_856.webp 856w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_891.webp 891w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_921.webp 921w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_956.webp 956w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_994.webp 994w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1019.webp 1019w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1073.webp 1073w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 2',
    title: 'Помогаю включить желаемое состояние',
  },
  {
    src: `${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_615.jpg`,
    srcSet: `
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_298.webp 298w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_376.webp 376w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_445.webp 445w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_508.webp 508w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_566.webp 566w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_615.webp 615w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_662.webp 662w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_710.webp 710w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_754.webp 754w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_796.webp 796w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_833.webp 833w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_867.webp 867w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_904.webp 904w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_949.webp 949w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_979.webp 979w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_999.webp 999w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1037.webp 1037w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1036.webp 1036w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 3',
    title: 'Помогаю наладить пищевое поведение',
  },
  {
    src: `${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_633.jpg`,
    srcSet: `
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_301.webp 301w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_385.webp 385w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_458.webp 458w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_517.webp 517w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_581.webp 581w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_633.webp 633w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_676.webp 676w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_724.webp 724w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_764.webp 764w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_800.webp 800w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_843.webp 843w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_882.webp 882w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_922.webp 922w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_952.webp 952w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_988.webp 988w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1017.webp 1017w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1051.webp 1051w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1087.webp 1087w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 4',
    title: 'Помогаю в освоении полезных привычек',
  },
  {
    src: `${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_603.jpg`,
    srcSet: `
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_294.webp 294w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_371.webp 371w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_439.webp 439w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_499.webp 499w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_556.webp 556w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_603.webp 603w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_653.webp 653w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_699.webp 699w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_740.webp 740w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_782.webp 782w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_814.webp 814w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_857.webp 857w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_895.webp 895w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_931.webp 931w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_960.webp 960w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_992.webp 992w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1019.webp 1019w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1049.webp 1049w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 5',
    title: 'Помогаю определить истинные цели',
  },
  {
    src: `${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_624.jpg`,
    srcSet: `
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_302.webp 302w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_385.webp 385w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_460.webp 460w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_519.webp 519w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_574.webp 574w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_624.webp 624w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_674.webp 674w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_716.webp 716w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_756.webp 756w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_804.webp 804w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_841.webp 841w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_878.webp 878w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_915.webp 915w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_952.webp 952w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_984.webp 984w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1015.webp 1015w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1038.webp 1038w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1069.webp 1069w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 6',
    title: 'Помогаю расставить приоритеты',
  },
  {
    src: `${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_639.jpg`,
    srcSet: `
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_306.webp 306w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_388.webp 388w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_463.webp 463w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_525.webp 525w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_586.webp 586w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_639.webp 639w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_684.webp 684w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_730.webp 730w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_770.webp 770w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_813.webp 813w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_850.webp 850w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_890.webp 890w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_928.webp 928w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_974.webp 974w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_996.webp 996w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1026.webp 1026w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1054.webp 1054w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1087.webp 1087w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 7',
    title: 'Помогаю обрести душевный покой',
  },
  {
    src: `${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_626.jpg`,
    srcSet: `
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_305.webp 305w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_387.webp 387w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_465.webp 465w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_527.webp 527w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_581.webp 581w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_626.webp 626w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_678.webp 678w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_726.webp 726w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_766.webp 766w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_806.webp 806w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_853.webp 853w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_890.webp 890w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_924.webp 924w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_956.webp 956w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_990.webp 990w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1044.webp 1044w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1048.webp 1048w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1083.webp 1083w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 8',
    title: 'Помогаю понять себя и свое тело',
  },
  {
    src: `${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_647.jpg`,
    srcSet: `
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_250.webp 250w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_310.webp 310w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_394.webp 394w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_469.webp 469w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_532.webp 532w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_594.webp 594w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_647.webp 647w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_695.webp 695w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_739.webp 739w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_782.webp 782w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_823.webp 823w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_862.webp 862w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_904.webp 904w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_935.webp 935w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_969.webp 969w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1005.webp 1005w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1035.webp 1035w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1064.webp 1064w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1095.webp 1095w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1125.webp 1125w`,
    alt: 'Отзыв 9',
    title: 'Помогаю найти в себе силы',
  },
];

export const Img = styled('img')(({ theme }) => {
  return {
    borderRadius: theme.spacing(1),
  };
});

function References() {
  const height = '541';
  const width = '250';
  const [firstReference, ...lazyLoadingReferences]: ReferenceData[] = references;
  return (
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
      pagination={{ clickable: true, dynamicBullets: true }}
      style={{ height: `${height}px` }}
    >
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
        <picture>
          <source type="image/webp" srcSet={firstReference.srcSet} />
          <source type="image/jpeg" srcSet={firstReference.src} />
          <Img src={firstReference.src} alt={firstReference.title} loading="lazy" height={height} width={width} />
        </picture>
      </SwiperSlide>
      {lazyLoadingReferences.map(function mapReferences(item: ReferenceData) {
        return (
          <SwiperSlide key={item.src} style={{ display: 'flex', justifyContent: 'center' }}>
            <picture>
              <source type="image/webp" data-srcset={item.srcSet} />
              <source type="image/jpeg" data-srcset={item.src} />
              <Img data-src={item.src} alt={item.title} height={height} width={width} className="swiper-lazy" />
            </picture>
            {/* TODO: Polish the fallback image */}
            <div className="swiper-lazy-preloader" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default References;
