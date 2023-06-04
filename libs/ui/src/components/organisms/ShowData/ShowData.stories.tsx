import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShowData } from './ShowData'

export default {
  title: 'src/components/templates/ShowData',
  component: ShowData,
} as ComponentMeta<typeof ShowData>

const Template: ComponentStory<typeof ShowData> = (args) => (
  <ShowData {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
