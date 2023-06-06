import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PageTitle } from './PageTitle'

export default {
  title: 'src/components/atoms/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
