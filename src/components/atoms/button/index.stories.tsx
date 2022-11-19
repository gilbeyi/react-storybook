import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args}>button</Button>;

export const Default = Template.bind({});
Default.args = {}
