import type { Meta, StoryObj } from '@storybook/react';
import { KeepValue } from './KeepValue';

const meta = {
  title: 'Components/KeepValue',
  component: KeepValue,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof KeepValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _KeepValue: Story = {};
