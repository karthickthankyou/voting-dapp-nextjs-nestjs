import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MyPersonalitiesPage } from './MyPersonalitiesPage'

export default {
  title: 'src/components/templates/MyPersonalitiesPage',
  component: MyPersonalitiesPage,
} as ComponentMeta<typeof MyPersonalitiesPage>

const Template: ComponentStory<typeof MyPersonalitiesPage> = (args) => (
  <MyPersonalitiesPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
