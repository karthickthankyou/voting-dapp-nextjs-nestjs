import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TitleValue } from './TitleValue'

export default {
  title: 'atoms/Brand',
  component: TitleValue,
} as ComponentMeta<typeof TitleValue>

const Template: ComponentStory<typeof TitleValue> = (args) => (
  <TitleValue {...args} />
)

export const TitleValuePrimary = Template.bind({})
TitleValuePrimary.args = {
  children: 'Children',
  title: 'Title',
}
TitleValuePrimary.parameters = {}
