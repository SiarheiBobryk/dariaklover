import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';

const PUBLIC_PATH = 'responsive_images/reference_';

interface ReferenceData {
  src: string;
  srcSet: string;
  alt: string;
  title: string;
}

// TODO: Double-check the possibility to reveal a blurred photo ❗️
const referenceData: ReferenceData[] = [
  {
    src: `${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_300.png 300w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_380.png 380w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_442.png 442w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_504.png 504w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_566.png 566w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_612.png 612w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_659.png 659w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_708.png 708w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_742.png 742w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_786.png 786w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_829.png 829w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_870.png 870w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_901.png 901w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_942.png 942w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_965.png 965w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_984.png 984w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1041.png 1041w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1060.png 1060w,
      ${PUBLIC_PATH}001/reference_001_z4hzxz_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 1',
    title: 'Помогаю найти мотивацию',
  },
  {
    src: `${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_294.png 294w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_370.png 370w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_436.png 436w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_498.png 498w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_551.png 551w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_599.png 599w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_649.png 649w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_695.png 695w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_741.png 741w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_785.png 785w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_813.png 813w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_856.png 856w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_891.png 891w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_921.png 921w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_956.png 956w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_994.png 994w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1019.png 1019w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1073.png 1073w,
      ${PUBLIC_PATH}002/reference_002_acntl2_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 2',
    title: 'Помогаю включить желаемое состояние',
  },
  {
    src: `${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_298.png 298w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_376.png 376w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_445.png 445w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_508.png 508w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_566.png 566w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_615.png 615w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_662.png 662w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_710.png 710w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_754.png 754w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_796.png 796w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_833.png 833w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_867.png 867w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_904.png 904w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_949.png 949w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_979.png 979w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_999.png 999w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1037.png 1037w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1036.png 1036w,
      ${PUBLIC_PATH}003/reference_003_smkyjr_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 3',
    title: 'Помогаю наладить пищевое поведение',
  },
  {
    src: `${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_301.png 301w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_385.png 385w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_458.png 458w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_517.png 517w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_581.png 581w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_633.png 633w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_676.png 676w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_724.png 724w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_764.png 764w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_800.png 800w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_843.png 843w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_882.png 882w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_922.png 922w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_952.png 952w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_988.png 988w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1017.png 1017w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1051.png 1051w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1087.png 1087w,
      ${PUBLIC_PATH}004/reference_004_l7vi5b_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 4',
    title: 'Помогаю в освоении полезных привычек',
  },
  {
    src: `${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_294.png 294w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_371.png 371w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_439.png 439w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_499.png 499w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_556.png 556w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_603.png 603w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_653.png 653w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_699.png 699w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_740.png 740w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_782.png 782w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_814.png 814w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_857.png 857w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_895.png 895w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_931.png 931w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_960.png 960w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_992.png 992w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1019.png 1019w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1049.png 1049w,
      ${PUBLIC_PATH}005/reference_005_rtxopi_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 5',
    title: 'Помогаю определить истинные цели',
  },
  {
    src: `${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_302.png 302w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_385.png 385w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_460.png 460w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_519.png 519w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_574.png 574w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_624.png 624w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_674.png 674w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_716.png 716w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_756.png 756w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_804.png 804w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_841.png 841w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_878.png 878w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_915.png 915w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_952.png 952w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_984.png 984w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1015.png 1015w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1038.png 1038w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1069.png 1069w,
      ${PUBLIC_PATH}006/reference_006_yvgszc_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 6',
    title: 'Помогаю расставить приоритеты',
  },
  {
    src: `${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_306.png 306w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_388.png 388w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_463.png 463w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_525.png 525w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_586.png 586w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_639.png 639w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_684.png 684w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_730.png 730w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_770.png 770w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_813.png 813w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_850.png 850w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_890.png 890w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_928.png 928w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_974.png 974w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_996.png 996w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1026.png 1026w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1054.png 1054w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1087.png 1087w,
      ${PUBLIC_PATH}007/reference_007_wu3eqj_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 7',
    title: 'Помогаю обрести душевный покой',
  },
  {
    src: `${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_305.png 305w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_387.png 387w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_465.png 465w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_527.png 527w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_581.png 581w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_626.png 626w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_678.png 678w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_726.png 726w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_766.png 766w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_806.png 806w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_853.png 853w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_890.png 890w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_924.png 924w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_956.png 956w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_990.png 990w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1044.png 1044w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1048.png 1048w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1083.png 1083w,
      ${PUBLIC_PATH}008/reference_008_g9udvj_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 8',
    title: 'TODO: Add the name here',
  },
  {
    src: `${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1125.png`,
    srcSet: `
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_200.png 200w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_310.png 310w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_394.png 394w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_469.png 469w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_532.png 532w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_594.png 594w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_647.png 647w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_695.png 695w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_739.png 739w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_782.png 782w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_823.png 823w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_862.png 862w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_904.png 904w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_935.png 935w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_969.png 969w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1005.png 1005w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1035.png 1035w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1064.png 1064w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1095.png 1095w,
      ${PUBLIC_PATH}009/reference_009_vzitye_c_scale,w_1125.png 1125w`,
    alt: 'Отзыв 9',
    title: 'Помогаю найти в себе силы',
  },
];

function References() {
  return (
    <ImageList
      sx={{
        height: 660,
      }}
      cols={1}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        {referenceData.map((item) => {
          return (
            <ImageListItem key={item.src} sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 300 }}>
              <img srcSet={item.srcSet} src={item.src} alt={item.alt} />
              <ImageListItemBar subtitle={item.title} />
            </ImageListItem>
          );
        })}
      </Box>
    </ImageList>
  );
}

export default References;
