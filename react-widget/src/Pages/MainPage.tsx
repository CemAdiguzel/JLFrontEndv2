/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/quotes
import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Grid container item>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Link to="/lab/selection-page">
          <Button variant="contained" color="primary">
            OurLocalLogin2
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
