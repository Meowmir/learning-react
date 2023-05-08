import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { NoraTextField } from "../components/nora-textfield";
import { TextFieldProps } from "@mui/material";

export function TextFieldView(props: TextFieldProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <h3>Outlined</h3>
        <NoraTextField {...props} variant={"outlined"} />
        <h3>Filled</h3>
        <NoraTextField {...props} variant={"filled"} />
        <h3>Standard</h3>
        <NoraTextField {...props} variant={"standard"} />
      </Grid>

      <Grid item xs={6}>
        <h3>Outlined</h3>
        <TextField {...props} variant={"outlined"} />
        <h3>Filled</h3>
        <TextField {...props} variant={"filled"} />
        <h3>Standard</h3>
        <TextField {...props} variant={"standard"} />
      </Grid>
    </Grid>
  );
}
