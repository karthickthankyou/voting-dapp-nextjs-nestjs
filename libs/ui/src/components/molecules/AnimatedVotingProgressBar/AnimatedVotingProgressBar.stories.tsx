import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimatedVotingProgressBar } from './AnimatedVotingProgressBar'

export default {
  title: 'src/components/molecules/AnimatedVotingProgressBar',
  component: AnimatedVotingProgressBar,
} as ComponentMeta<typeof AnimatedVotingProgressBar>

const Template: ComponentStory<typeof AnimatedVotingProgressBar> = (args) => (
  <AnimatedVotingProgressBar />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
