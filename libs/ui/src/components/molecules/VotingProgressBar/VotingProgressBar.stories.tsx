import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VotingProgressBar } from './VotingProgressBar'

export default {
  title: 'src/components/molecules/VotingProgressBar',
  component: VotingProgressBar,
} as ComponentMeta<typeof VotingProgressBar>

const Template: ComponentStory<typeof VotingProgressBar> = (args) => (
  <VotingProgressBar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
