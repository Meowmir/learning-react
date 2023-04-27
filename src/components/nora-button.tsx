import React, { useState } from "react";
import { ButtonProps } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  text-transform: uppercase;
  min-width: 64px;
  align-items: center;
  margin: 0px;
  position: relative;
  justify-content: center;
  box-sizing: border-box;
  vertical-align: middle;
  line-height: 1.75;
  border-radius: 4px;

  &.button__size--small {
    font-size: 0.8125rem;
    padding: 4px 10px;
  }

  &.button__size--medium {
    font-size: 0.875rem;
    padding: 6px 16px;
  }

  &.button__size--large {
    font-size: 0.9375rem;
    padding: 8px 22px;
  }

  &.button__variant--text {
    background-color: transparent;
    color: #65beff;
    border: 0px;
    border-color: transparent;
    padding: 4px 5px;
  }

  &.button__variant--outlined {
    background-color: transparent;
    color: #65beff;
    border: 1px solid #1976d280;
    border-color: #2270bc80;
    padding: 3px 9px;
  }

  &.button__variant--contained {
    background-color: #2271bf;
    border: 0px;
    border-color: transparent;
    box-shadow: #0d0d0d33 0px 3px 1px -2px, #0d0d0d24 0px 2px 2px 0px,
      #0d0d0d1f 0px 1px 5px 0px;
    padding: 4px 10px;
  }
`;

/**
 * Primary UI component for user interaction
 */
export function NoraButton(props: ButtonProps) {
  const classes: string[] = [];

  if (props.variant === "text") {
    classes.push("button__variant--text");
  }
  if (props.variant === "outlined") {
    classes.push("button__variant--outlined");
  }
  if (props.variant === "contained") {
    classes.push("button__variant--contained");
  }

  if (props.size === "small") {
    classes.push("button__size--small");
  }

  return (
    <div>
      <StyledButton className={classes.join(" ")}>
        {props.children}
      </StyledButton>
    </div>
  );
}
