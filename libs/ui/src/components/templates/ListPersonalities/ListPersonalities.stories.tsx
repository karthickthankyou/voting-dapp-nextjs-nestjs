import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListPersonalities } from './ListPersonalities'

export default {
  title: 'src/components/templates/ListPersonalities',
  component: ListPersonalities,
} as ComponentMeta<typeof ListPersonalities>

const Template: ComponentStory<typeof ListPersonalities> = (args) => (
  <ListPersonalities {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
