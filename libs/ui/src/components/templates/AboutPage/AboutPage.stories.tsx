import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AboutPage } from './AboutPage'

export default {
  title: 'src/components/templates/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => (
  <AboutPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
