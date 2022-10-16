import * as React from 'react';

import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import CloseIcon from '@mui/icons-material/Close';

export interface AlertClosableProps {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  severity?: 'success' | 'info' | 'warning' | 'error';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlertClosable = React.forwardRef(function AlertClosable(props: AlertClosableProps, ref: React.Ref<any>) {
  const { children, open, onClose, ...other } = props;

  return (
    <Collapse in={open}>
      <Alert
        ref={ref}
        sx={{ my: 1 }}
        action={
          <Tooltip title="Закрыть">
            <IconButton color="inherit" aria-label="Закрыть" onClick={onClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        }
        {...other}
      >
        {children}
      </Alert>
    </Collapse>
  );
});

export default AlertClosable;
