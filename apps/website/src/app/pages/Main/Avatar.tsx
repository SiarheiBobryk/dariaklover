import AvatarMui from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const Avatar = styled(AvatarMui)(function styleAvatar({ theme }) {
  return {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1),
  };
});

export default Avatar;
