import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadialScore } from './RadialScore'

export default {
  title: 'src/components/molecules/RadialScore',
  component: RadialScore,
} as ComponentMeta<typeof RadialScore>

const Template: ComponentStory<typeof RadialScore> = (args) => (
  <RadialScore {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
