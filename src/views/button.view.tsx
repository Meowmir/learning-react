import React from "react";
import Grid from "@mui/material/Grid";
import Button, { ButtonProps } from "@mui/material/Button";

import { NoraButton } from "../components/nora-button";

export function ButtonView(props: ButtonProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <NoraButton {...props} />
      </Grid>
      <Grid item xs={6}>
        <Button {...props} />
      </Grid>
    </Grid>
  );
}
