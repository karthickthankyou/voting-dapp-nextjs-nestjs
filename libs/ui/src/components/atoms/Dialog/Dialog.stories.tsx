import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dialog } from './Dialog'

export default {
  title: 'atoms/Dialog2',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
