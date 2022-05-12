/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable no-unused-vars */ import * as React from 'react';
import Card from '@material-ui/core/Card';
import { Dialog, Grid } from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function StudentAssignmentList(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid style={{ minWidth: 275 }}>
        <Card
          variant="outlined"
          style={{ minHeight: 500, border: '1px solid orange' }}
        ></Card>
      </Grid>
      <Dialog open={open} onClose={handleClose}></Dialog>
    </>
  );
}
