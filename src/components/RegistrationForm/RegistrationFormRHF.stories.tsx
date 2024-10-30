import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationFormRHF } from './RegistrationFormRHF';

const meta = {
  title: 'Components/RegistrationFormRHF',
  component: RegistrationFormRHF,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegistrationFormRHF>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _RegistrationFormRHF: Story = {};
