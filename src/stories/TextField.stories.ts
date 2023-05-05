import { ClassNames } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

import { TextFieldView } from "../views/textfield.view";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/TextFieldView",
  component: TextFieldView,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextFieldView>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Text",
  },
};
