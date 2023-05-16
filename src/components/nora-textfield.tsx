import React, { useState } from "react";
import { TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";

// importing "TextField" from MUI is cheating ;) You're supposed to recreate it not use it.
// if you inspect the HTML on their docs you can see that they use a <textarea> for multiline
// and <input> for single line. I changed your code
const StyledTextArea = styled.textarea`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 23px;
  text-align: left;
  text-indent: 0px;
  text-rendering: auto;
  box-sizing: border-box;
  display: block;
  border: 0;
  height: 56px;

  &:focus {
    writing-mode: horizontal-tb !important;
  }

  &.textfield__variant--outlined {
    padding: 16.5px 14px;
    border-radius: 4px;
    border-color: #0000003b;
    border-style: solid;
    border-width: 1px;
    width: 195px;
  }

  &.textfield__variant--filled {
    position: relative;
    background-color: #0000000f;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 167px;
    height: 23px;
    box-sizing: content-box;
    padding: 25px 12px 8px 12px;

    &:hover {
      background-color: #00000017;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid #1976d2;
    }

    &:focus-visible {
      outline: none;
    }
  }

  &.textfield__variant--standard {
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 0;
    background: none;
    animation-duration: 10ms;
    position: relative;
    height: 32px;
    width: 167px;

    &:hover {
      border-bottom: 2px solid #000000de;
    }

    &:focus {
      outline: 0;
    }

    &:focus-visible {
      border-bottom: 2px solid #1976d2;
    }
  }
`;

const StyledInput = StyledTextArea.withComponent("input");

const StyledDiv = styled.div`
  &::before {
    content: "";
    display: block;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }
  &::after {
    content: "";
  }

  &.textfield-wrapper__variant--filled {
    position: relative;
    width: 191px;

    &::before {
      content: "";
      border: 1px;
      border-bottom: 1px solid #0000006b;
      position: absolute;
    }

    &::after {
      content: "";
      border-bottom: 1px solid #0000006b;
      position: absolute;
    }
  }

  &.textfield-wrapper__variant--standard {
    position: relative;
    width: 167px;

    &::before {
      border: 1px;
      border-bottom: 1px solid #0000006b;
      position: absolute;
    }

    &::after {
      display: block;
      border-bottom: 2px solid #1976d2;
      position: absolute;
    }

    &.textfield-wrapper--focused {
      &::after {
        transform: scaleX(0) translateX(0);
      }
    }
  }
`;

export function NoraTextField(props: TextFieldProps) {
  const classes = [
    props.variant === "outlined" ? "textfield__variant--outlined" : "",
    props.variant === "filled" ? "textfield__variant--filled" : "",
    props.variant === "standard" ? "textfield__variant--standard" : "",
  ].filter(Boolean);

  const divClasses = [
    props.variant === "filled" ? "textfield-wrapper__variant--filled" : "",
    props.variant === "standard" ? "textfield-wrapper__variant--standard" : "",
  ].filter(Boolean);

  const [isFocus, setIsFocus] = useState(false);
  const Elem = props.multiline ? StyledTextArea : StyledInput;

  return (
    <StyledDiv className={divClasses.join(" ")}>
      <Elem
        className={classes.join(" ")}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </StyledDiv>
  );
}
