import { styled } from '@mui/material/styles';

const Img = styled('img')(function styleImg({ theme }) {
  return {
    float: 'right',
    borderRadius: theme.typography.pxToRem(8),
    margin: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      width: theme.spacing(22),
    },
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(28),
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(38),
    },
  };
});

export default Img;
