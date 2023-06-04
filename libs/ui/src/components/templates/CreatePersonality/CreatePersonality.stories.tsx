import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CreatePersonality } from './CreatePersonality'

export default {
  title: 'src/components/templates/CreatePersonality',
  component: CreatePersonality,
} as ComponentMeta<typeof CreatePersonality>

const Template: ComponentStory<typeof CreatePersonality> = (args) => <CreatePersonality {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
