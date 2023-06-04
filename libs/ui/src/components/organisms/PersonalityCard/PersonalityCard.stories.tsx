import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PersonalityCard } from './PersonalityCard'

export default {
  title: 'src/components/organisms/PersonalityCard',
  component: PersonalityCard,
} as ComponentMeta<typeof PersonalityCard>

const Template: ComponentStory<typeof PersonalityCard> = (args) => <PersonalityCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
