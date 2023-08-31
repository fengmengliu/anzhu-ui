// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "../../styles/index.scss" // 样式在story中引入即可，和老版本呢的配置不一样了
import Button, { ButtonSize, ButtonType } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  args: {
    children: "button",
    btnType: ButtonType.Danger,
    size: ButtonSize as any,
  },
};

export const Secondary2: Story = {
  args: {
    btnType: ButtonType.Danger,
    size: ButtonSize as any,
    children: "😄👍😍💯",
  },
};

export const Tertiary: Story = {
  render: () => <Button>📚📕📈🤓</Button>,
};
