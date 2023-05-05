import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { NoraTextField } from "../components/nora-textfield";
import { TextFieldProps } from "@mui/material";

export function TextFieldView(props: TextFieldProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <NoraTextField {...props} />
      </Grid>
      <Grid item xs={6}>
        <TextField {...props} />
        <h3>Outlined</h3>
        <TextField {...props} /*startIcon={<ThreeDRotation />}*/ />
      </Grid>
    </Grid>
  );
}
