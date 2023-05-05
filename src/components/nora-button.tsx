import React, { useState } from "react";
import { ButtonProps } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  --inherit-color: #e0e0e0;
  --inherit-hover-color: #0000000a;
  --inherit-contained-hover-color: #f5f5f5;
  --primary-color: #1976d2;
  --primary-hover-color: #1976d20a
  --primary-contained-hover-color: #1565c0;
  --secondary-color: #9c27b0;
  --secondary-hover-color: #9c27b00a;
  --secondary-contained-hover-color: #7b1fa2;
  --success-color: #2e7d32;
  --success-hover-color: #2e7d320a;
  --success-contained-hover-color: #1b5e20;
  --error-color: #d32f2f;
  --error-hover-color: #d32f2f0a;
  --error-contained-hover-color: #c62828;
  --info-color: #0288d1;
  --info-hover-color: #0288d10a;
  --info-contained-hover-color: #01579b;
  --warning-color: #ed6c02;
  --warning-hover-color: #ed6c020a;
  --warnin-contained-hover-color: #e65100;

  --disabled-color: #00000042;
  --disabled-hover-color: #1976d20a;

  --white-color: #ffffff;
  --black-color: #000000;

  --contained--hover--box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  --contained--box-shadow: 0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024,
    0px 1px 5px 0px #0000001f;

  padding: 6px 8px;
  background-color: transparent;
  color: var(--primary-color);
  border: 0px;
  border-radius: 4px;
  border-color: transparent;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  line-height: 1.75;
  display: inline-flex;
  min-width: 64px;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  &.button__disabled--true {
    color: var(--disabled-color);
    pointer-events: none;

    &:hover {
      color: var(--disabled-grey-color);
      background-color: var(--disabled-hover-color);
    }
  }

  &.button__size--small {
    font-size: 0.8125rem;
    padding: 4px 5px;
  }

  &.button__size--large {
    font-size: 0.9375rem;
    padding: 8px 11px;
  }

  &.button__variant--outlined {
    padding: 5px 15px;
    border: 1px solid #1976d280;
    border-color: #2270bc80;
  }

  &.button__variant--contained {
    padding: 6px 16px;
    background-color: var(--primary-color);
    box-shadow: var(--contained--box-shadow);
  }

  &.button__color--inherit {
    &.button__variant--text {
      color: inherit;

      &:hover {
        background-color: var(--inherit-hover-color);
      }
    }

    &.button__variant--outlined {
      border: 1px solid currentColor;
      color: inherit;
      border-color: currentColor;

      &:hover {
        background-color: var(--inherit-hover-color);
        border-color: var(--black-color);
      }
    }

    &.button__variant--contained {
      color: inherit;
      background-color: var(--inherit-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--inherit-contained-hover-color);
      }
    }
  }

  &.button__color--primary {
    &.button__variant--text {
      color: var(--primary-color);

      &:hover {
        background-color: var(--primary-hover-color);
      }
    }

    &.button__variant--outlined {
      color: var(--primary-color);

      &:hover {
        background-color: var(--primary-hover-color);
        border: 1px solid var(--primary-color);
      }
    }

    &.button__variant--contained {
      background-color: var(--primary-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--primary-contained-hover-color);
        box-shadow: var(--contained--hover--box-shadow);
      }
    }
  }

  &.button__color--secondary {
    &.button__variant--text {
      color: var(--secondary-color);

      &:hover {
        background-color: var(--secondary-hover-color);
        color: var(--secondary-color);
      }
    }

    &.button__variant--outlined {
      color: var(--secondary-color);
      border: 1px solid #9c27b080;

      &:hover {
        background-color: var(--secondary-hover-color);
        border: 1px solid var(--secondary-color);
      }
    }

    &.button__variant--contained {
      background-color: var(--secondary-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--secondary-contained-hover-color);
        box-shadow: var(--contained--hover--box-shadow);
      }
    }
  }

  &.button__color--success {
    &.button__variant--text {
      color: var(--success-color);

      &:hover {
        background-color: var(--success-hover-color);
      }
    }

    &.button__variant--outlined {
      border: 1px solid #2e7d3280;
      color: var(--success-color);

      &:hover {
        background-color: var(--success-hover-color);
        border: 1px solid var(--success-color);
        color: var(--success-color);
      }
    }

    &.button__variant--contained {
      background-color: var(--success-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--success-contained-hover-color);
        box-shadow: var(--contained--hover--box-shadow);
      }
    }
  }

  &.button__color--error {
    &.button__variant--text {
      color: var(--error-color);

      &:hover {
        background-color: var(--error-hover-color);
      }
    }

    &.button__variant--outlined {
      border: 1px solid #d32f2f80;
      color: var(--error-color);

      &:hover {
        background-color: var(--error-hover-color);
        border: 1px solid var(--error-color);
      }
    }

    &.button__variant--contained {
      background-color: var(--error-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--error-contained-hover-color);
        box-shadow: var(--contained-hover--box-shadow);
      }
    }
  }

  &.button__color--info {
    &.button__variant--text {
      color: var(--info-color);

      &:hover {
        background-color: var(--info-hover-color);
      }
    }

    &.button__variant--outlined {
      border: 1px solid #0288d180;
      color: var(--info-color);

      &:hover {
        background-color: var(--info-hover-color);
        border: 1px solid var(--info-color);
      }
    }
    &.button__variant--contained {
      background-color: var(--info-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--info-contained-hover-color);
        box-shadow: var(--contained--hover--box-shadow);
      }
    }
  }

  &.button__color--warning {
    &.button__variant--text {
      color: var(--warning-color);

      &:hover {
        background-color: var(--warning-hover-color);
      }
    }

    &.button__variant--outlined {
      border: 1px solid #ed6c0280;
      color: var(--warning-color);

      &:hover {
        background-color: var(--warning-hover-color);
        border: 1px solid var(--warning-color);
      }
    }
    &.button__variant--contained {
      background-color: var(--warning-color);
      box-shadow: var(--contained--box-shadow);

      &:hover {
        background-color: var(--warning-contained-hover-color);
        box-shadow: var(--contained--hover--box-shadow);
      }
    }
  }

  &.button__disable-elevation--true {
    box-shadow: none;
  }

  &.button__full-width--true {
    width: 100%;
  }

  &.button__startIcon--true {
    display: inherit;
    margin-right: 8px;
    margin-left: -4px;
    font-size: 20px;
  }
`;

const StyledLink = StyledButton.withComponent("a");

/**
 * Primary UI component for user interaction
 */
export function NoraButton(props: ButtonProps) {
  const classes: string[] = [];
  const Elem = props.href ? StyledLink : StyledButton;
  let tabNum = props.tabIndex;

  if (props.disabled) {
    classes.push("button__disabled--true");
  }

  if (props.size === "small") {
    classes.push("button__size--small");
  } else if (props.size === "large") {
    classes.push("button__size--large");
  }

  if (props.variant === "text") {
    classes.push("button__variant--text");
  } else if (props.variant === "outlined") {
    classes.push("button__variant--outlined");
  } else if (props.variant === "contained") {
    classes.push("button__variant--contained");
  }

  if (props.color === "inherit") {
    classes.push("button__color--inherit");
  } else if (props.color === "error") {
    classes.push("button__color--error");
  } else if (props.color === "info") {
    classes.push("button__color--info");
  } else if (props.color === "secondary") {
    classes.push("button__color--secondary");
  } else if (props.color === "warning") {
    classes.push("button__color--warning");
  } else if (props.color === "success") {
    classes.push("button__color--success");
  } else if (props.color === "primary") {
    classes.push("button__color--primary");
  }

  if (props.disableElevation) {
    classes.push("button__disable-elevation--true");
  }

  if (props.fullWidth) {
    classes.push("button__full-width--true");
  }

  return (
    <Elem
      className={classes.join(" ")}
      tabIndex={tabNum}
      disabled={props.disabled || undefined}
      href={props.href || undefined}
    >
      {props.startIcon}
      {props.children}
      {props.endIcon}
    </Elem>
  );
}
