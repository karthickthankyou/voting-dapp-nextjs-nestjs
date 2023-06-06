import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyVotesPage } from './MyVotesPage'

export default {
  title: 'src/components/templates/MyVotesPage',
  component: MyVotesPage,
} as ComponentMeta<typeof MyVotesPage>

const Template: ComponentStory<typeof MyVotesPage> = (args) => (
  <MyVotesPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
