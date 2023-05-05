import React, { useState } from "react";
import { TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";

const TextField = ({ className }: { className: string }) => (
  <div className={className}>Text</div>
);

const StyledTextField = styled(TextField)`
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;
  display: inline-flex;

  &.textfield__outlinedInput--root {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    color: #000000de;
    box-sizing: border-box;
    align-items: center;
    position: relative;
    border-radius: 4px;

    padding: 16.5px 14px;
    box-sizing: content-box;
  }
`;

export function NoraTextField(props: TextFieldProps) {
  const classes: string[] = [];

  if (props.variant === "outlined") {
    classes.push("button__full-width--true");
  }

  return <StyledTextField className={classes.join(" ")}></StyledTextField>;
}
