import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavSidebar } from './NavSidebar'

export default {
  title: 'src/components/organisms/NavSidebar',
  component: NavSidebar,
} as ComponentMeta<typeof NavSidebar>

const Template: ComponentStory<typeof NavSidebar> = (args) => (
  <NavSidebar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
