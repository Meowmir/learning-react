import React, { useState } from "react";
import { TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";

const EmoTextField = ({ className }: { className: string }) => (
  <div className={className}></div>
);

// importing "TextField" from MUI is cheating ;) You're supposed to recreate it not use it.
// if you inspect the HTML on their docs you can see that they use a <textarea> for multiline
// and <input> for single line. I changed your code
const StyledTextArea = styled.textarea`
  box-sizing: content-box;
  display: block;
  height: 23px;
  width: 154.5px;
  padding: 16.5px 14px;

  border-radius: 4px;

  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 16px;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variation-settings: normal;

  line-height: 23px;
  text-align: left;
  text-indent: 0px;
  text-rendering: auto;

  background-attachment: scroll;

  &:focus {
    writing-mode: horizontal-tb !important;
  }

  &.textfield__variant--outlined {
    border-color: #0000003b;
    border-style: solid;
    border-width: 1px;
  }

  &.textfield__variant--filled {
    background-color: #0000000f;
    color: #000000de;
    display: inline-flex;

    &:hover {
      background-color: #00000017;
    }

    &:focus-visible {
      outline: -webkit-focus-ring-color auto 1px;
    }
  }

  &.textfield__variant--standard {
  }
`;

const StyledInput = StyledTextArea.withComponent("input");

export function NoraTextField(props: TextFieldProps) {
  const classes: string[] = [];

  const Elem = props.multiline ? StyledTextArea : StyledInput;

  if (props.variant === "outlined") {
    classes.push("textfield__variant--outlined");
  }

  if (props.variant === "filled") {
    classes.push("textfield__variant--filled");
  }

  if (props.variant === "standard") {
    classes.push("textfield__variant--standard");
  }

  return <Elem className={classes.join(" ")} />;
}
