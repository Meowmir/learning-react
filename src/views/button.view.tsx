import React from "react";
import Grid from "@mui/material/Grid";
import Button, { ButtonProps } from "@mui/material/Button";
import { ThreeDRotation } from "@mui/icons-material";

import { NoraButton } from "../components/nora-button";

export function ButtonView(props: ButtonProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <NoraButton {...props} />
        <h3>With Start Icon</h3>
        <NoraButton {...props} startIcon={<ThreeDRotation />} />
        <h3>With End Icon</h3>
        <NoraButton {...props} endIcon={<ThreeDRotation />} />
      </Grid>
      <Grid item xs={6}>
        <Button {...props} />
        <h3>With Start Icon</h3>
        <Button {...props} startIcon={<ThreeDRotation />} />
        <h3>With End Icon</h3>
        <Button {...props} endIcon={<ThreeDRotation />} />
      </Grid>
    </Grid>
  );
}
