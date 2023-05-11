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
    padding-top: 25px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;

    background-color: #0000000f;
    color: #000000de;
    display: inline-flex;
    border: 0;

    &:hover {
      background-color: #00000017;
    }

    &:focus-visible {
      outline: -webkit-focus-ring-color auto 1px;
    }
  }

  &.textfield__variant--standard {
    font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 0;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0;
    width: 100%;
    animation-duration: 10ms;
  }
`;

const StyledInput = StyledTextArea.withComponent("input");

const StyledDiv = styled.div`
  &::before {
    content: "";
    border-bottom: 1px solid #ff00ff;
    left: 0;
    bottom: 0;
    position: absolute;
    right: 0;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }

  &::after {
    content: "";
    border-bottom: 2px solid #ff00ff;
  }

  /* inside this div is another element with this class */
  &.special-class .textfield__variant--filled {
  }
`;

export function NoraTextField(props: TextFieldProps) {
  const classes: string[] = [];
  const divClasses: string[] = [];

  const Elem = props.multiline ? StyledTextArea : StyledInput;

  if (props.variant === "outlined") {
    classes.push("textfield__variant--outlined");
  }

  if (props.variant === "filled") {
    classes.push("textfield__variant--filled");
    divClasses.push("textfield__variant--filled");
  }

  if (props.variant === "standard") {
    classes.push("textfield__variant--standard");
  }

  return (
    <StyledDiv className={divClasses.join(" ")}>
      <Elem className={classes.join(" ")} />
    </StyledDiv>
  );
}
