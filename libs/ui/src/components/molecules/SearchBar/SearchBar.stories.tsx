import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchBar } from './SearchBar'

export default {
  title: 'src/components/molecules/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
