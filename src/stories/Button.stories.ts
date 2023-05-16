import { ClassNames } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonView } from "../views/button.view";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ButtonView",
  component: ButtonView,
  tags: ["autodocs"],
  argTypes: {
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    classes: { table: { disable: true } },
    TouchRippleProps: { table: { disable: true } },
    touchRippleRef: { table: { disable: true } },
    LinkComponent: { table: { disable: true } },
    onFocusVisible: { table: { disable: true } },
    sx: { table: { disable: true } },
    action: { table: { disable: true } },
  },
} satisfies Meta<typeof ButtonView>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Text",
  },
};
