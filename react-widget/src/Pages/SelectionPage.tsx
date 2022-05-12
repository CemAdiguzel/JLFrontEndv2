/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function SelectionPage() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Link to="/lab/student-home-page">
          <Button variant="contained" color="primary">
            Student View
          </Button>
        </Link>
        <Link to="/lab/home-page">
          <Button variant="contained" color="primary">
            Lecturer View
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
