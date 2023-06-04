import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AlertSection } from './AlertSection'

export default {
  title: 'components/organisms/AlertSection',
  component: AlertSection,
} as ComponentMeta<typeof AlertSection>

const Template: ComponentStory<typeof AlertSection> = (args) => (
  <AlertSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'You are not logged in',
}
Primary.parameters = {}
