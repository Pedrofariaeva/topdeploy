import React, { useEffect } from 'react';
import { Snackbar, makeStyles, Theme, createStyles } from '@material-ui/core';
import { SnackBarProps } from '../interfaces/index';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#76B73E',
    },
  })
);

const SimpleSnackbar: React.FC<SnackBarProps> = ({
  openFeedback,
  message,
}: SnackBarProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(openFeedback);

  useEffect(() => {
    setOpen(openFeedback);
  }, [openFeedback]);

  return (
    <div>
      <Snackbar
        ContentProps={{
          className: classes.root,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        message={message}
      />
    </div>
  );
};

export default SimpleSnackbar;
